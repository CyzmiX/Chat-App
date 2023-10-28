<script>
    import { onMount } from 'svelte';
    import './app.css'

    onMount(() => {
        document.body.classList.add('bg-slate-800')
    })
</script>
<slot />

