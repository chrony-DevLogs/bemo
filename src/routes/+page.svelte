<script lang="ts">
    import { fade } from 'svelte/transition';
    import MatrixRain from '$lib/components/MatrixRain.svelte';
    import Card from '$lib/components/Card.svelte';
    import { base } from '$app/paths';
    function scrollToFeatures() {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }

    function handleCardScroll(e: MouseEvent | TouchEvent) {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId!);
        
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
</script>

<MatrixRain />

<div class="container mx-auto px-4 min-h-screen flex flex-col mt-10">
	<section 
        in:fade={{ duration: 1000 }} 
        class="hero h-[calc(100vh-100px)] flex flex-col items-center justify-center text-center space-y-4 sm:space-y-8 relative px-4"
    >
        <div class="flex flex-col items-center gap-4 sm:gap-8">
            <h1 class="h1 font-cairo text-4xl sm:text-5xl md:text-6xl">متاعك تكسر؟ PC</h1>
            <p class="text-lg sm:text-xl md:text-2xl max-w-2xl opacity-90 font-cairo">
                !ما تخافش الحل عندنا
            </p>
            <div class="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
                <a href="{base}/contact" class="btn btn-lg sm:btn-xl variant-filled-primary rounded w-full sm:w-auto">كلمنا توا</a>
                <a href="{base}/services" class="btn btn-lg sm:btn-xl variant-ghost-surface rounded w-full sm:w-auto">شوف شنوة نجمو نقدمولك</a>
            </div>
            
            <button 
                on:click={scrollToFeatures}
                class="mt-8 sm:mt-12 animate-bounce p-2 rounded-full hover:bg-surface-500/20 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </button>
        </div>
    </section>

	<section id="features" class="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-16">
		<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			<a href="#card1" class="h-full" on:click={handleCardScroll} on:touchend={handleCardScroll}>
				<Card
					id="card1"
					icon="🖥️"
					title="Pro فرمتاج"
					description="Activé و Windows Original نصبولك"
					bgClass="bg-primary-500"
					hoverClass="hover:variant-soft-primary"
				/>
			</a>

			<a href="#card2" class="h-full" on:click={handleCardScroll} on:touchend={handleCardScroll}>
				<Card
					id="card2"
					icon="⚡"
					title="سرفيس عجاجة"
					description="متاعك يتصلح في  PC <br/>ضرف 24 ال 48 ساعة"
					bgClass="bg-secondary-500"
					hoverClass="hover:variant-soft-secondary"
				/>
			</a>

			<a href="#card3" class="h-full" on:click={handleCardScroll} on:touchend={handleCardScroll}>
				<Card
					id="card3"
					icon="💰"
					title="سوم معقول"
					description="أسوام تساعد الطلبة و التلامذة"
					bgClass="bg-tertiary-500"
					hoverClass="hover:variant-soft-tertiary"
				/>
			</a>
		</div>
		
		<div class="mt-12 text-center">
			<a href="{base}/services" class="btn variant-ghost-surface">
				شوف على عينك <i class="ml-2">→</i>
			</a>
		</div>
	</section>
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

    :global(html) {
        scroll-behavior: smooth;
    }
</style>