<script lang="ts">
    import { fade } from 'svelte/transition';
    import Carousel from '$lib/components/Carousel.svelte';
    import Card from '$lib/components/Card.svelte';
    import { base } from '$app/paths';

    const services = [
        {
            id: "scan",
            icon: "🔍",
            title: "سكان للسيستام",
            description: "نشوفو المشاكل الكل<br><span>Prefermence</span> متع",
            bgClass: "bg-tertiary-500/20",
            hoverClass: "hover:variant-soft-tertiary"
        },
        {
            id: "driver",
            icon: "⚙️",
            title: "نصبولك الدريفرات",
            description: "<span>les pilots</span> نتأكدو إلي  <br>الكل يخدمو مليح",
            bgClass: "bg-secondary-500/20",
            hoverClass: "hover:variant-soft-secondary"
        },
        {
            id: "dll",
            icon: "🔧",
            title: "تصليح DLL",
            description: "نصلحو الفيشيات<br>المكسرين ولا المفقودين",
            bgClass: "bg-tertiary-500/20",
            hoverClass: "hover:variant-soft-tertiary"
        },
        {
            id: "software",
            icon: "📦",
            title: "تحديث البرامج",
            description: "نقترحولك<br>البرامج الي لازم تحدثهم",
            bgClass: "bg-success-500/20",
            hoverClass: "hover:variant-soft-success"
        },
        {
            id: "disk",
            icon: "💿",
            title: "HDDتسريع الـ",
            description: "نحسنو أداء<br>Disque Dur",
            bgClass: "bg-warning-500/20",
            hoverClass: "hover:variant-soft-warning"
        }
    ];

    function handleCardScroll(e: MouseEvent | TouchEvent | KeyboardEvent) {
        e.preventDefault();
        const target = e.currentTarget as HTMLElement;
        const targetId = target.id;
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
</script>

<div class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-16 lg:px-0 px-2" in:fade={{ duration: 300 }}>
    <div class="text-center pb-8 md:pb-16">
        <h1 class="h2">بـ <span class="text-primary-500">20 دينار</span> نوفرولك</h1>
    </div>

    <div class="w-full lg:px-0 px-2">
        <div class="md:w-full w-[296px] mx-auto">
            <Carousel items={services} let:items let:appendItems>
                {#each [...items, ...items.slice(0, appendItems)] as service}
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
                        class="flex-shrink-0 w-[280px]"
                    >
                        <Card
                            id={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            bgClass={service.bgClass}
                            hoverClass={service.hoverClass}
                        />
                    </div>
                {/each}
            </Carousel>
        </div>
    </div>

    <div class="text-center pt-8">
        <a href="{base}/services" class="btn variant-glass-surface">← ارجع للخدمات</a>
        <a href="{base}/contact" class="btn variant-glass-primary relative overflow-hidden">احجز توا →</a>
    </div>
</div>
