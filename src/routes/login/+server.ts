import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    return json({
        error,
        data
    })
};