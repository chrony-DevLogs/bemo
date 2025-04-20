<script lang="ts">
    import { fade } from 'svelte/transition';
    import MatrixRain from '$lib/components/MatrixRain.svelte';
    import { base } from '$app/paths';
    function scrollToFeatures() {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<MatrixRain />

<div class="container mx-auto px-4 min-h-screen flex flex-col">
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
        </div>

        <button 
            on:click={scrollToFeatures}
            class="absolute bottom-8 sm:bottom-12 animate-bounce p-2 rounded-full hover:bg-surface-500/20 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
        </button>
    </section>

	<section id="features" class="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-16">
		<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			<div class="card variant-ghost-surface p-8 text-center hover:variant-soft-primary transition-all duration-200 cursor-pointer flex flex-col">
				<div class="space-y-4 flex-1">
					<div class="bg-primary-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
						<span class="text-3xl inline-flex items-center justify-center w-full h-full">🖥️</span>
					</div>
					<h3 class="h3 font-cairo">Pro فرمتاج</h3>
					<p class="opacity-80 font-cairo">Activé و Windows Original نصبولك</p>
				</div>
				<div class="flex justify-center gap-1 text-warning-500 pt-4">
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
				</div>
			</div>

			<div class="card variant-ghost-surface p-8 text-center hover:variant-soft-secondary transition-all duration-200 cursor-pointer flex flex-col">
				<div class="space-y-4 flex-1">
					<div class="bg-secondary-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
						<span class="text-3xl inline-flex items-center justify-center w-full h-full">⚡</span>
					</div>
					<h3 class="h3 font-cairo">سرفيس عجاجة</h3>
					<p class="opacity-80">متاعك يتصلح في  PC <br/>ضرف 24 ال 48 ساعة </p>
				</div>
				<div class="flex justify-center gap-1 text-warning-500 pt-4">
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
					<span class="text-xl">★</span>
				</div>
			</div>

			<div class="card variant-ghost-surface p-8 text-center hover:variant-soft-tertiary transition-all duration-200 cursor-pointer flex flex-col">
				<div class="space-y-4 flex-1">
					<div class="bg-tertiary-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
						<span class="text-3xl inline-flex items-center justify-center w-full h-full">💰</span>
					</div>
					<h3 class="h3 font-cairo">سوم معقول</h3>
					<p class="opacity-80">أسوام تساعد الطلبة و التلامذة</p>
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
</style>