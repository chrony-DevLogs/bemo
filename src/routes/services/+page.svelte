<script lang="ts">
    import { fade } from 'svelte/transition';
    import Service from '$lib/components/Service.svelte';
    import { base } from '$app/paths';
</script>

<div class="container font-cairo mx-auto px-4 py-8 sm:py-16">
	<div class="text-center mb-8 sm:mb-16" in:fade={{ duration: 1000 }}>
		<h1 class="h1 mb-4 font-cairo text-3xl sm:text-4xl md:text-5xl">كفاش نجمو نعاونوك؟</h1>
		<p class="text-lg sm:text-xl opacity-80">فرمتاج, صبان لعب, وإلا برمجة؟</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
		<Service
			id="formatting"
			icon="💻"
			title="Formatage Simple / Pro"
			description="متاعك يرجع خفيف PC"
			bgColor="bg-primary-500"
			links={[
				{
					href: `${base}/services/formatting/simple`,
					text: "Formatage Simple",
					badge: "30DT",
					variant: "variant-soft-primary"
				},
				{
					href: `${base}/services/formatting/pro`,
					text: "Formatage Pro + Adobe Suite",
					badge: "50DT",
					variant: "variant-soft-primary"
				}
			]}
		/>

		<Service
			id="security"
			icon="🛡️"
			title="Sécurité et virus"
			description="مالبرامج الخبيثة PCنضفولك الـ"
			bgColor="bg-error-500"
			links={[
				{
					href: `${base}/services/virus-removal`,
					text: "Suppression De Virus",
					badge: "20DT",
					variant: "variant-soft-error"
				}
			]}
		/>

		<Service
			id="consultation"
			icon="🔧"
			title="Consultation"
			description="تحب رأي مختص؟"
			bgColor="bg-tertiary-500"
			links={[
				{
					href: "tel:+21624680854",
					text: "Consultation Téléphonique",
					badge: "Free",
					variant: "variant-soft-surface"
				},
				{
					href: `${base}/services/consultation`,
					text: "Consultation Sur Place",
					badge: "20DT",
					variant: "variant-soft-tertiary"
				}
			]}
		/>

		<Service
			id="gaming"
			icon="🎮"
			title="Configuration Gaming"
			description="أرجع عيش صغرك مع لعب الـ2000"
			bgColor="bg-secondary-500"
			links={[
				{
					href: `${base}/services/soon?sn=Configuration Rétro&e=🎮&bg=variant-soft-secondary`,
					text: "Configuration Rétro",
					badge: "35DT",
					variant: "variant-soft-secondary"
				},
				{
					href: `${base}/services/soon?sn=Configuration Rétro Avancée&e=🎮&bg=variant-soft-secondary`,
					text: "Configuration Rétro Avancée",
					badge: "65DT",
					variant: "variant-soft-secondary"
				}
			]}
		/>

		<Service
			id="revival"
			icon="🗿"
			title="PC Revival"
			description="قديم و ماهوش يخدم بالباهي؟ PC عندك"
			bgColor="bg-success-500"
			links={[
				{
					href: `${base}/services/pc-revival`,
					text: "Installation Linux Optimisée",
					badge: "25DT",
					variant: "variant-soft-success"
				}
			]}
		/>

		<Service
			id="advanced"
			icon="🚀"
			title="Services Avancés"
			description="أفكارك تجم تولي واقع من خلال البرمجة"
			bgColor="bg-warning-500"
			links={[
				{
					href: `${base}/services/soon?sn=Development Web`,
					text: "Développement Web",
					badge: "Contact Us",
					variant: "variant-soft-warning"
				},
				{
					href: `${base}/services/soon?sn=Development Mobile`,
					text: "Développement Mobile",
					badge: "Contact Us",
					variant: "variant-soft-warning"
				}
			]}
		/>
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

    @keyframes glow {
        0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }
        100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
        }
    }
</style>
