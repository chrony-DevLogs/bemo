<script lang="ts">
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const fontSize = 14;
    let drops: number[] = [];
    let width: number;
    let height: number;

    onMount(() => {
        ctx = canvas.getContext('2d')!;
        
        function updateSize() {
            width = 300;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            drops = Array(Math.floor(width / fontSize)).fill(1);
        }

        updateSize();
        window.addEventListener('resize', updateSize);

        const interval = setInterval(draw, 40);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', updateSize);
        };
    });

    function draw() {
        ctx.clearRect(0, 0, width, height);

        const colorPalette = [
            'rgba(0, 255, 0, 0.4)',      // Lime
            'rgba(150, 255, 150, 0.35)', // Light lime
            'rgba(200, 255, 200, 0.3)',  // Very light lime
            'rgba(100, 255, 100, 0.35)', // Medium lime
            'rgba(50, 255, 50, 0.4)'     // Bright lime
        ];

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            ctx.fillStyle = randomColor;
            ctx.font = `bold ${fontSize}px monospace`;
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > height) {
                if (Math.random() > 0.975) {
                    drops[i] = 0;
                }
            }
            drops[i]++;
        }
    }
</script>

<canvas
    bind:this={canvas}
    class="fixed top-0 left-0 w-[300px] h-screen -z-10 pointer-events-none rounded-3xl"
/>