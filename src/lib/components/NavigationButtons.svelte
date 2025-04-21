<script lang="ts">
    import { base } from '$app/paths';
    export let showBookNow: boolean = true;
</script>

<div class="text-center pt-8">
    <a href="{base}/services" class="btn variant-glass-surface">← Back to Services</a>
    {#if showBookNow}
        <a href="{base}/contact" class="btn variant-glass-primary relative overflow-hidden px-6 py-3">Book Now →</a>
    {:else}
        <a href="{base}/contact" class="btn variant-glass-primary relative overflow-hidden px-6 py-3">Contact Us →</a>
    {/if}
</div>

<style>
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