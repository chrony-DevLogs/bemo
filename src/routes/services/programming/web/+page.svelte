<script lang="ts">
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths';
</script>

<div class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4 py-16" in:fade={{ duration: 300 }}>
    <div class="text-center pb-8 md:pb-16">
        <h1 class="h2 font-mono">For <span class="text-primary-500">Contact Us</span> You Get</h1>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto place-items-center w-full">
        <div class="card variant-glass-surface p-8 text-center hover:variant-soft-tertiary transition-all duration-200 cursor-pointer flex flex-col max-w-[280px] w-full">
            <div class="space-y-4 flex-1">
                <div class="bg-tertiary-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span class="text-3xl inline-flex items-center justify-center w-full h-full">⚡</span>
                </div>
                <h3 class="h3">Svelte App</h3>
                <p class="opacity-80">Modern and visually striking<br>frontend with the Svelte framework!</p>
            </div>
            <div class="flex justify-center gap-1 text-warning-500 pt-4">
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
            </div>
        </div>

        <div class="card variant-glass-surface p-8 text-center hover:variant-soft-primary transition-all duration-200 cursor-pointer flex flex-col max-w-[280px] w-full">
            <div class="space-y-4 flex-1">
                <div class="bg-primary-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span class="text-3xl inline-flex items-center justify-center w-full h-full">🚀</span>
                </div>
                <h3 class="h3">Deployment</h3>
                <p class="opacity-80">Professional hosting setup<br>with SSL & CDN integration</p>
            </div>
            <div class="flex justify-center gap-1 text-warning-500 pt-4">
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
            </div>
        </div>

        <div class="card variant-glass-surface p-8 text-center hover:variant-soft-secondary transition-all duration-200 cursor-pointer flex flex-col max-w-[280px] w-full">
            <div class="space-y-4 flex-1">
                <div class="bg-secondary-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span class="text-3xl inline-flex items-center justify-center w-full h-full">📈</span>
                </div>
                <h3 class="h3">SEO</h3>
                <p class="opacity-80">Search engine optimization<br>& performance tuning</p>
            </div>
            <div class="flex justify-center gap-1 text-warning-500 pt-4">
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
                <span class="text-xl">★</span>
            </div>
        </div>
    </div>

    <div class="text-center pt-8">
        <a href="{base}/services" class="btn variant-glass-surface">← Back to Services</a>
        <a href="{base}/contact" class="btn variant-glass-primary relative overflow-hidden px-6 py-3">Contact Us →</a>
    </div>
</div>

<style>
    .card, .btn {
        position: relative;
        overflow: hidden;
    }

    .card::after, .btn::after {
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
