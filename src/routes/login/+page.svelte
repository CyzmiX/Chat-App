<script lang='ts'>
    import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
    
    import { goto } from "$app/navigation";

    let email: string = ''
    let password: string = ''
    async function login() {
        if (!email || !password) {
            console.error('Invalid data!')
            return
        }
        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
			headers: {
				'content-type': 'application/json',
			},
        })

        const json = await res.json()

        if (!json?.error)
            goto('/login/success')

    }
</script>



<div class='mt-6'>
    <div class="mb-6">
      <Label for="email" class="mb-2">Email address</Label>
      <Input type="email" id="email" placeholder="john.doe@company.com" required />
    </div>
    <div class="mb-6">
      <Label for="password" class="mb-2">Password</Label>
      <Input type="password" id="password" placeholder="•••••••••" required />
    </div>

    <Button type="submit">Submit</Button>
</div>
