<script lang="ts">
    import Carousel from '$lib/components/Carousel.svelte';
    import Card from '$lib/components/Card.svelte';
    import PageContainer from '$lib/components/PageContainer.svelte';
    import NavigationButtons from '$lib/components/NavigationButtons.svelte';

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

<PageContainer price="60DT">
    <div class="w-full lg:px-0 px-2">
        <div class="md:w-full w-[296px] mx-auto">
            <Carousel items={services} let:items let:appendItems>
                {#each [...items, ...items.slice(0, appendItems)] as service}
                    <div class="flex-shrink-0 w-[280px]">
                        <Card {...service} />
                    </div>
                {/each}
            </Carousel>
        </div>
    </div>
    <NavigationButtons />
</PageContainer>
