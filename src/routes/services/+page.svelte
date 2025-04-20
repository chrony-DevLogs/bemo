<script lang="ts">
	import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            const delay = Math.random() * 2; // Random delay between 0-2 seconds
            (button as HTMLElement).style.animationDelay = `${delay}s`;
        });
    });
</script>

<div class="container font-cairo mx-auto px-4 py-8 sm:py-16">
	<div class="text-center mb-8 sm:mb-16" in:fade={{ duration: 1000 }}>
		<h1 class="h1 mb-4 font-cairo text-3xl sm:text-4xl md:text-5xl">كفاش نجمو نعاونوك؟</h1>
		<p class="text-lg sm:text-xl opacity-80">فرمتاج, صبان لعب, وإلا برمجة؟</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
		<!-- Simple & Pro Formatting Section -->
		<div class="card variant-ghost-surface p-4 sm:p-8 space-y-4 sm:space-y-6">
			<div class="flex items-center gap-3 sm:gap-4">
				<div class="bg-primary-500 p-2 sm:p-3 rounded-full">
					<span class="text-xl sm:text-2xl">💻</span>
				</div>
				<div>
					<h3 class="h3 text-lg sm:text-xl">Formatage Simple / Pro</h3>
					<p class="opacity-80 text-sm sm:text-base">متاعك يرجع خفيف PC</p>
				</div>
			</div>
			<div class="space-y-3 sm:space-y-4">
				<a href="{base}/services/formatting/simple" class="btn !rounded variant-soft-primary w-full justify-between text-sm sm:text-base">
					Formatage Simple
					<span class="badge text-sm sm:text-base">30DT</span>
				</a>
				<a href="{base}/services/formatting/pro" class="btn !rounded variant-soft-primary w-full justify-between text-sm sm:text-base">
					Formatage Pro + Adobe Suite
					<span class="badge text-sm sm:text-base">60DT</span>
				</a>
			</div>
		</div>

		<!-- Security Section -->
		<div class="card variant-ghost-surface p-8 space-y-6">
			<div class="flex items-center gap-4">
				<div class="bg-error-500 p-3 rounded-full">
					<span class="text-2xl">🛡️</span>
				</div>
				<div>
					<h3 class="h3">Sécurité et virus</h3>
					<p class="opacity-80"> مالبرامج الخبيثة PCنضفولك الـ</p>
				</div>
			</div>
			<a href="{base}/services/virus-removal" class="btn !rounded variant-soft-error w-full justify-between text-sm sm:text-base">
				Suppression De Virus
				<span class="badge text-sm sm:text-base">40DT</span>
			</a>
		</div>

		<!-- Consultation Section -->
		<div class="card variant-ghost-surface p-8 space-y-6">
			<div class="flex items-center gap-4">
				<div class="bg-tertiary-500 p-3 rounded-full">
					<span class="text-2xl">🔧</span>
				</div>
				<div>
					<h3 class="h3">Consultation</h3>
					<p class="opacity-80">تحب رأي مختص؟</p>
				</div>
			</div>
			<div class="space-y-4">
				<a href="tel:+21612345678" class="btn !rounded variant-soft-surface w-full justify-between text-sm sm:text-base">
					Consultation Téléphonique
					<span class="badge variant-filled-success text-sm sm:text-base">Free</span>
				</a>
				<a href="{base}/services/consultation" class="btn !rounded variant-soft-tertiary w-full justify-between">
					Consultation Sur Place
					<span class="badge">20DT</span>
				</a>
			</div>
		</div>

		<!-- Gaming & Retro Section -->
		<div class="card variant-ghost-surface p-8 space-y-6">
			<div class="flex items-center gap-4">
				<div class="bg-secondary-500 p-3 rounded-full">
					<span class="text-2xl">🎮</span>
				</div>
				<div>
					<h3 class="h3">Configuration Gaming</h3>
					<p class="opacity-80">أرجع عيش صغرك مع لعب الـ2000</p>
				</div>
			</div>
			<div class="space-y-4">
				<a href="{base}/services/retro-gaming/simple" class="btn !rounded variant-soft-secondary w-full justify-between">
					Configuration Rétro
					<span class="badge">35DT</span>
				</a>
				<a href="{base}/services/retro-gaming/advanced" class="btn !rounded variant-soft-secondary w-full justify-between">
					Configuration Rétro Avancée
					<span class="badge">65DT</span>
				</a>
			</div>
		</div>

		<!-- PC Revival Section -->
		<div class="card variant-ghost-surface p-8 space-y-6">
			<div class="flex items-center gap-4">
				<div class="bg-success-500 p-3 rounded-full">
					<span class="text-2xl">🗿</span>
				</div>
				<div>
					<h3 class="h3">PC Revival</h3>
					<p class="opacity-80">قديم و ماهوش يخدم بالباهي؟ PC عندك </p>
				</div>
			</div>
			<a href="{base}/services/pc-revival" class="btn !rounded variant-soft-success w-full justify-between">
				Installation Linux Optimisée
				<span class="badge">25DT</span>
			</a>
		</div>

		<!-- Advanced Services Section -->
		<div class="card variant-ghost-surface p-8 space-y-6">
			<div class="flex items-center gap-4">
				<div class="bg-warning-500 p-3 rounded-full">
					<span class="text-2xl">🚀</span>
				</div>
				<div>
					<h3 class="h3">Services Avancés</h3>
					<p class="opacity-80">أفكارك تجم تولي واقع من خلال البرمجة</p>
				</div>
			</div>
			<a href="{base}/services/dev/web" class="btn !rounded variant-soft-warning w-full justify-between">
				Développement Web
				<span class="badge">Contact Us</span>
			</a>
            <a href="{base}/services/dev/mobile" class="btn !rounded variant-soft-warning w-full justify-between">
				Développement Mobile
				<span class="badge">Contact Us</span>
			</a>
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
    .btn {
        position: relative;
        overflow: hidden;
    }

    .btn::after {
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
