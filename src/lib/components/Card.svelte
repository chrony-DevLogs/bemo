<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;
	export let bgClass: string = "bg-primary-500/20";
	export let hoverClass: string = "hover:variant-soft-primary";
	export let showRating: boolean = true;
	export let id: string;
</script>

<div
	{id}
	class="card variant-glass-surface p-8 text-center {hoverClass} transition-all duration-200 cursor-pointer flex flex-col h-full w-full"
>
	<div class="space-y-4 flex-1">
		<div class="{bgClass} p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
			<span class="text-3xl inline-flex items-center justify-center w-full h-full">{icon}</span>
		</div>
		<h3 class="h3 font-cairo">{title}</h3>
		<p class="opacity-80">{@html description}</p>
	</div>

	{#if showRating}
	<div class="flex justify-center gap-1 text-warning-500 pt-4">
		{#each Array(5) as _}
			<span class="text-xl">★</span>
		{/each}
	</div>
	{/if}
</div>

<style>
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
</style>
