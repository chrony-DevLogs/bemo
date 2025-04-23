<script lang="ts">
    export let items: any[] = [];
    export let itemsPerView = 3;
    export let cardWidth = 280;
    export let gapWidth = 16;
    export let autoplayInterval = 5000;

    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let currentIndex = 0;
    let interval: NodeJS.Timeout;
    let slider: HTMLElement;
    let touchStartX = 0;
    let touchEndX = 0;
    let isMobile = false;
    let currentItemsPerView = itemsPerView;
    let isVerticalMode = false;
    let isScrolling = false;
    let canAutoScroll = true;
    let scrollTimeout: NodeJS.Timeout;

    $: if (browser) {
        updateViewConfig();
    }

    function updateViewConfig() {
        const width = window.innerWidth;
        isMobile = width <= 768;

        if (width <= 1020 && width > 770) {
            currentItemsPerView = 2;
        } else if (width > 1020) {
            currentItemsPerView = itemsPerView;
        }

        isVerticalMode = width <= 770;
    }

    onMount(() => {
        slider = document.querySelector('.carousel-slider') as HTMLElement;
        interval = setInterval(next, autoplayInterval);

        const handleResize = () => {
            updateViewConfig();
        };

        const handleScroll = () => {
            if (!isVerticalMode) {
                clearTimeout(scrollTimeout);
                isScrolling = true;
                
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                    // Update currentIndex based on scroll position
                    const scrollLeft = slider.scrollLeft;
                    currentIndex = Math.round(scrollLeft / scrollDistance);
                    restartInterval();
                }, 150);
            }
        };

        slider.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            clearInterval(interval);
            clearTimeout(scrollTimeout);
            slider.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    });

    $: remainingItems = items.length % currentItemsPerView;
    $: appendItems = remainingItems > 0 ? currentItemsPerView - remainingItems : 0;
    $: hasAppendedItems = appendItems > 0;
    $: scrollDistance = (cardWidth * currentItemsPerView) + (gapWidth * currentItemsPerView);

    function handleMouseEnter() {
        if (!isMobile) {
            canAutoScroll = false;
            clearInterval(interval);
        }
    }

    function handleMouseLeave() {
        if (!isMobile) {
            canAutoScroll = true;
            restartInterval();
        }
    }

    function handleTouchStart(e: TouchEvent) {
        if (isVerticalMode) return;
        touchStartX = e.touches[0].clientX;
        canAutoScroll = false;
        clearInterval(interval);
    }

    function handleTouchEnd(e: TouchEvent) {
        if (isVerticalMode) return;
        touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > 50) {
            swipeDistance > 0 ? prev() : next();
        } else {
            scrollToCurrentIndex();
        }
        canAutoScroll = true;
        restartInterval();
    }

    function restartInterval() {
        clearInterval(interval);
        if (canAutoScroll) {
            interval = setInterval(next, autoplayInterval);
        }
    }

    function scrollToCurrentIndex() {
        if (!slider) return;
        const targetScroll = currentIndex * scrollDistance;
        slider.scrollTo({
            left: targetScroll,
            behavior: isScrolling ? 'auto' : 'smooth'
        });
    }

    function next() {
        if (isVerticalMode) return;

        const totalPages = Math.ceil((items.length + appendItems) / currentItemsPerView);
        if (currentIndex >= totalPages - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        scrollToCurrentIndex();
        restartInterval();
    }

    function prev() {
        if (isVerticalMode) return;

        const totalPages = Math.ceil((items.length + appendItems) / currentItemsPerView);
        if (currentIndex <= 0) {
            currentIndex = totalPages - 1;
        } else {
            currentIndex--;
        }
        scrollToCurrentIndex();
        restartInterval();
    }
</script>

<div class="relative w-full max-w-[1040px] mx-auto flex items-center gap-4">
    {#if !isVerticalMode}
        <button 
            class="btn variant-glass-surface aspect-square z-10" 
            on:click={prev}
            aria-label="Previous slide"
        >←</button>
    {/if}

    <div
        class="overflow-hidden flex-1 min-w-0"
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}
        role="region"
        aria-label="Carousel content"
    >
        <div
            class="carousel-slider"
            class:carousel-horizontal={!isVerticalMode}
            class:carousel-vertical={isVerticalMode}
            role="group"
            aria-label="Slides"
        >
            <slot {items} appendItems={appendItems} />
        </div>
    </div>

    {#if !isVerticalMode}
        <button 
            class="btn variant-glass-surface aspect-square z-10" 
            on:click={next}
            aria-label="Next slide"
        >→</button>
    {/if}
</div>

<style>
    .overflow-hidden {
        padding: 0.5rem;
        margin: 0 auto;
        touch-action: pan-y pinch-zoom;
    }

    .carousel-slider {
    scroll-behavior: smooth;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
    width: 100%;
    -webkit-overflow-scrolling: touch;

    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
}

.carousel-slider::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}


    .carousel-horizontal {
        flex-direction: row;
        gap: 1rem;
    }

    .carousel-vertical {
        flex-direction: column;
        gap: 1rem;
    }

    button {
        z-index: 10;
    }

    @media (max-width: 768px) {
        button {
            display: none;
        }

        .overflow-hidden {
            padding: 0.25rem;
        }
    }

    @media (max-width: 1020px) {
        .overflow-hidden {
            max-width: 100%;
        }
    }

    @media (max-width: 1280px){
        button {
            margin: -1px;
        }
    }
</style>