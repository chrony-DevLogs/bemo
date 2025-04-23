<script lang="ts">
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths';
    import Carousel from '$lib/components/Carousel.svelte';

    const services = [
        {
            id: "os",
            icon: "🪟",
            title: "Windows 10/11",
            description: "Windows Original<br>( Activé موش )",
            bgClass: "bg-tertiary-500/20",
            hoverClass: "hover:variant-soft-primary"
        },
        {
            id: "Pilote",
            icon: "⚙️",
            title: "نصبولك الدريفرات",
            description: "<span>les pilotes</span> <span>نصبولك</span><br> <span>الأساسين</span>",
            bgClass: "bg-primary-500/20",
            hoverClass: "hover:variant-soft-secondary"
        }
    ];
</script>

<div class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-16" in:fade={{ duration: 300 }}>
    <div class="text-center pb-16">
        <h1 class="h2">بـ <span class="text-primary-500">30 دينار</span> نوفرولك</h1>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-[600px] mx-auto place-items-center w-full">
        {#each services as service}
            <div 
                role="button"
                tabindex="0"
                on:click={() => {
                    const element = document.getElementById(service.id);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }}
                on:keydown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const element = document.getElementById(service.id);
                        if (element) {
                            element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }
                    }
                }}
                class="w-[280px]"
            >
                <div id={service.id} class="card variant-glass-surface p-8 text-center {service.hoverClass} transition-all duration-200 cursor-pointer flex flex-col h-full">
                    <div class="space-y-4 flex-1">
                        <div class="{service.bgClass} p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                            <span class="text-3xl inline-flex items-center justify-center w-full h-full">{service.icon}</span>
                        </div>
                        <h3 class="h3">{service.title}</h3>
                        <p class="opacity-80">{@html service.description}</p>
                    </div>
                    <div class="flex justify-center gap-1 text-warning-500 pt-4">
                        {#each Array(5) as _}
                            <span class="text-xl">★</span>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <div class="text-center pt-8">
        <a href="{base}/services" class="btn variant-glass-surface">← أرجع لقائمت الخدمات</a>
        <a href="{base}/contact" class="btn variant-glass-primary relative overflow-hidden">كلمنا توا →</a>
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
