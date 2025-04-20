<script lang="ts">
    import { fade } from 'svelte/transition';
    import Carousel from '$lib/components/Carousel.svelte';
    import { base } from '$app/paths';

    const services = [
        {
            icon: "🪟",
            title: "Windows 10/11",
            description: "Original Windows <br>(Activated)",
            bgClass: "bg-primary-500/20",
            hoverClass: "hover:variant-soft-primary"
        },
        {
            icon: "⚙️",
            title: "Full Driver Install",
            description: "run your software without getting a missing driver error",
            bgClass: "bg-secondary-500/20",
            hoverClass: "hover:variant-soft-secondary"
        },
        {
            icon: "🎨",
            title: "Adobe Photoshop",
            description: "Compatible Version With your pc",
            bgClass: "bg-[#31A8FF]/20",
            hoverClass: "hover:bg-[#31A8FF]/20"
        },
        {
            icon: "✏️",
            title: "Adobe Illustrator",
            description: "Compatible Version With your pc",
            bgClass: "bg-[#FF9A00]/20",
            hoverClass: "hover:bg-[#FF9A00]/20"
        }
    ];
</script>

<div class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-16 lg:px-0 px-2" in:fade={{ duration: 300 }}>
    <div class="text-center pb-8 md:pb-16">
        <h1 class="h2 font-mono">For <span class="text-primary-500">60DT</span> You Get</h1>
    </div>

    <div class="w-full lg:px-0 px-2">
        <div class="md:w-full w-[296px] mx-auto">
            <Carousel items={services} let:items let:appendItems>
                {#each [...items, ...items.slice(0, appendItems)] as service}
                    <div class="flex-shrink-0 w-[280px] card variant-glass-surface p-6 md:p-8 text-center {service.hoverClass} transition-all duration-200 cursor-pointer flex flex-col h-[280px]">
                        <div class="space-y-4 flex-1">
                            <div class="{service.bgClass} p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                                <span class="text-3xl inline-flex items-center justify-center w-full h-full">{service.icon}</span>
                            </div>
                            <h3 class="h3">{service.title}</h3>
                            <p class="opacity-80">{@html service.description}</p>
                        </div>
                        <div class="flex justify-center gap-1 text-warning-500 pt-4">
                            <span class="text-xl">★</span>
                            <span class="text-xl">★</span>
                            <span class="text-xl">★</span>
                            <span class="text-xl">★</span>
                            <span class="text-xl">★</span>
                        </div>
                    </div>
                {/each}
            </Carousel>
        </div>
    </div>
    <div class="text-center pt-8 flex justify-center gap-4">
        <a href="{base}/services" class="btn variant-glass-surface">← Back to Services</a>
        <a href="{base}/contact" class="btn variant-glass-primary relative overflow-hidden">Book Now →</a>
    </div>
</div>
