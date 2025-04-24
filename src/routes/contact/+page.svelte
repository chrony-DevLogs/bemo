<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    let serviceName = '';
    let emoji = '🤙';
    let bgClass = 'bg-tertiary-500/20';

    onMount(() => {
        // Handle query parameters on the client side
        const params = new URLSearchParams(window.location.search);
        serviceName = params.get('sn') || '';
        emoji = params.get('e') || '🤙';
        bgClass = params.get('bg') || 'bg-tertiary-500/20';
    });
</script>

<div class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-16 px-4" in:fade={{ duration: 300 }}>
    <div class="text-center pb-8">
        <h1 class="h1 mb-4 font-cairo">تواصل معانا</h1>
        {#if serviceName}
            <p class="text-xl opacity-80 mb-2">{serviceName} للإستفسار على</p>
        {/if}
    </div>

    <!-- Contact Methods -->
    <div class="card variant-glass-surface p-8 max-w-[400px] w-full" in:fly={{ y: 50, duration: 500, delay: 200 }}>
        <div class="space-y-6">
            <div class="{bgClass} p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span class="text-3xl">{emoji}</span>
            </div>
            <div class="space-y-4 text-center">
                <div>
                    <h3 class="h3 mb-2">رقم الهاتف</h3>
                    <a href="tel:+21624680854" class="btn variant-soft-primary">
                        +216 24 680 854
                    </a>
                </div>
                <div>
                    <h3 class="h3 mb-2">Mailالـ</h3>
                    <a href="mailto:bemo.business.tech@gmail.com" class="btn variant-soft-primary break-all">
                        bemo.business.tech@gmail.com
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="text-center pt-8">
        <a href="{base}/services" class="btn variant-ghost-surface">← ارجع للخدمات</a>
    </div>
</div>

<style>
    .card {
        position: relative;
        overflow: hidden;
    }

    :global(.variant-soft-primary) {
        border-radius: 4px !important;
        position: relative;
        z-index: 1;
    }

    .card::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transform: rotate(45deg);
        animation: glow 3s linear infinite;
        pointer-events: none;
        z-index: 0;
    }

    @keyframes glow {
        0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }
        100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
        }
    }
</style>