<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import '../app.postcss';

	// Remove these three lines
	// export const prerender = true;
	// export const ssr = true;
	// export const trailingSlash = 'always';
	
	let mouseX = 0;
	let mouseY = 0;
	let cursor: HTMLDivElement;
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		if (cursor) {
			cursor.style.transform = `translate(${mouseX - 350}px, ${mouseY - 350}px)`;
		}
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		afterNavigate(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="px-4 py-3">
			<svelte:fragment slot="lead">
				<div class="flex items-center gap-12">
					<a 
						href="{base}/"
						class="flex items-center gap-2 hover:text-primary-500 transition-colors"
					>
						<img src="{base}/BEMO.svg" alt="BMO" class="w-8 h-8 rounded-md" />
						<span class="text-2xl mr-robot-font"><b>BEMO</b></span>
					</a>
					<div class="hidden md:flex flex-col items-start text-sm opacity-75">
						<a href="tel:+21624680854" class="hover:text-primary-500 transition-colors">+216 24 680 854</a>
						<a href="mailto:bemo.business.tech@gmail.com" class="hover:text-primary-500 transition-colors">bemo.business.tech@gmail.com</a>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center gap-6">
					<a href="{base}/services" class="text-lg hover:text-primary-500 transition-colors">خدماتنا</a>
					<a href="{base}/about" class="text-lg hover:text-primary-500 transition-colors">نحن</a>
					<a href="{base}/contact" class="btn variant-filled-primary">إتصل الأن →</a>
				</nav>
				<!-- Mobile Menu Button -->
				<button class="md:hidden btn btn-sm menu-button" on:click={toggleMenu}>
					<span class="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
				</button>
			</svelte:fragment>
		</AppBar>
		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div 
				class="mobile-menu md:hidden fixed right-4 top-16 bg-surface-100-800-token z-40 rounded-lg shadow-xl"
				transition:fly={{ y: -10, duration: 200 }}
			>
				<nav class="flex flex-col items-start gap-4 p-4 min-w-[200px]">
					<div class="w-full border-b border-surface-500/30 pb-2 mb-2">
						<a href="tel:+21624680854" class="text-sm block hover:text-primary-500 transition-colors">+216 24 680 854</a>
						<a href="mailto:bemo.business.tech@gmail.com" class="text-sm block hover:text-primary-500 transition-colors">bemo.business.tech@gmail.com</a>
					</div>
					<a href="{base}/services" class="text-lg w-full hover:text-primary-500 transition-colors" on:click={toggleMenu}>خدماتنا</a>
					<a href="{base}/about" class="text-lg w-full hover:text-primary-500 transition-colors" on:click={toggleMenu}>نحن</a>
					<a href="{base}/contact" class="text-lg w-full hover:text-primary-500 transition-colors" on:click={toggleMenu}>إتصل الأن</a>
				</nav>
			</div>
		{/if}
	</svelte:fragment>

	<div class="relative overflow-hidden min-h-screen flex flex-col" on:mousemove={handleMouseMove} role="presentation">
		<div
			bind:this={cursor}
			class="pointer-events-none fixed -z-10 h-[700px] w-[700px] rounded-full bg-primary-500/20 blur-[100px] transition-transform duration-300 ease-out"
			role="presentation"
		/>
		<div class="flex-1">
			<slot />
		</div>
		
		<footer class="py-4 text-center bg-surface-100-800-token mt-auto">
			<div class="container mx-auto px-4">
				<p class="text-sm opacity-75">
					© {new Date().getFullYear()} BEMO. All rights reserved.
				</p>
				<p class="text-xs opacity-50 mt-1">
					Developed by BEMO Tech
				</p>
			</div>
		</footer>
	</div>
</AppShell>

<style>
	:global(body) {
		overflow-x: hidden;
	}

	@font-face {
		font-family: 'Mr Robot';
		src: url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap') format('truetype');
	}

	.mr-robot-font {
		font-family: 'Mr Robot', monospace;
	}
</style>
