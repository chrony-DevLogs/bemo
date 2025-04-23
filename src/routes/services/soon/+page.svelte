<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { browser } from '$app/environment';

    $: serviceName = browser ? $page.url.searchParams.get('sn') : 'الخدمة';
    $: emoji = browser ? $page.url.searchParams.get('e') : '🚀';
    $: bgClass = browser ? $page.url.searchParams.get('bg') : 'bg-warning-500';
</script>

<div class="text-right flex items-center font-cairo justify-center min-h-[calc(100vh-64px)]">
    <div class="container max-w-4xl mx-auto my-8 py-16 px-4 variant-glass-surface rounded-lg backdrop-blur-sm" in:fade={{ duration: 300 }}>
        <div class="mx-auto text-center">
            <div class="flex flex-col items-center gap-8 mb-16" in:fly={{ y: 50, duration: 500 }}>
                <div class="w-full">
                    <div class="inline-flex items-center justify-center w-32 h-32 rounded-full {bgClass} mb-4">
                        <span class="text-6xl">{emoji}</span>
                    </div>
                    <p class="text-xl opacity-90">{serviceName}</p>
                </div>
                <div class="w-full">
                    <h1 class="h1 mb-4">قريباً</h1>
                    <p class="text-xl opacity-90 mb-2">!هذه الخدمة قيد التطوير</p>
                    <p class="text-lg opacity-90">نحن نعمل بجد لتوفير هذه الخدمة في أقرب وقت ممكن</p>
                </div>
            </div>

            <!-- Return Section -->
            <div 
                class="card variant-glass-primary p-8 text-center mt-8"
                in:fly={{ y: 50, duration: 500 }}
            >
                <h2 class="h2 mb-4">تريد العودة؟</h2>
                <p class="mb-6 opacity-90">يمكنك استكشاف خدماتنا الأخرى في الوقت الحالي</p>
                <div class="flex justify-center gap-4">
                    <a href="{base}/services" class="btn variant-filled">← عودة للخدمات</a>
                    <a 
                        href="{base}/contact?sn={serviceName}&e=🚀&bg=bg-warning-500" 
                        class="btn variant-filled-primary"
                    >
                        تواصل معنا →
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lilita+One&display=swap');
    .font-cairo{
        font-family: "Cairo", sans-serif;
        font-optical-sizing: auto;
        font-weight: auto;
        font-style: normal;
        font-variation-settings:
            "slnt" 0;    
    }
    .card {
        position: relative;
        overflow: hidden;
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
    }

    @keyframes glow {
        0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }
        100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
        }
    }

    .container {
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }
</style>