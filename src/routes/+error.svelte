<script lang="ts">
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths';
</script>

<div 
    class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center p-4"
    in:fade={{ duration: 300 }}
>
    <div class="card variant-glass-surface p-8 max-w-lg w-full">
        <h1 class="h1 mb-4">404 - Page Not Found</h1>
        <p class="mb-8 opacity-90">Sorry, we couldn't find the page you're looking for.</p>
        <div class="flex justify-center gap-4">
            <a href="{base}/" class="btn variant-filled-primary">Go Home</a>
            <a href="{base}/services" class="btn variant-filled">Our Services</a>
        </div>
    </div>
</div>