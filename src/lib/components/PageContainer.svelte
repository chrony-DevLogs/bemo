<script lang="ts">
    import { fade } from 'svelte/transition';
    export let title: string = '';
    export let price: string | null = null;
</script>

<div class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4 py-16" in:fade={{ duration: 300 }}>
    {#if title}
    <div class="text-center pb-8 md:pb-16">
        <h1 class="h2 font-mono">
            {#if price}
            For <span class="text-primary-500">{price}</span> You Get
            {:else}
            {title}
            {/if}
        </h1>
    </div>
    {/if}
    <slot />
</div>