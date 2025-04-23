<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { base } from '$app/paths';
</script>

<div class=" text-right flex items-center font-cairo justify-center min-h-[calc(100vh-64px)]">
    <div class="container max-w-4xl mx-auto my-8 py-16 px-4 variant-glass-surface rounded-lg backdrop-blur-sm" in:fade={{ duration: 300 }}>
        <div class="mx-auto">
            <!-- Hero Sectio -->
            <div class="flex flex-col md:flex-row items-center gap-8 mb-16" in:fly={{ y: 50, duration: 500 }}>
                <div class="md:w-1/2">
                    <img 
                        src="{base}/BEMO.svg" 
                        alt="BEMO" 
                        class="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-xl"
                    />
                </div>
                <div class="md:w-1/2 text-center md:text-right">
                    <h1 class="h1 mb-4">BEMO أهلا أنا</h1>
                    <p class="text-lg opacity-90">PCنسهر باش نوفرلك استخدام آمن و منغير مشاكل للـ</p>
                    <p class="text-lg opacity-90">Tech متاعك ونفرح كي نشوفك تبع في غرامك في عالم</p>
                </div>
            </div>

            <!-- Mission Section -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="card variant-glass-surface p-8" in:fly={{ x: -50, duration: 500 }}>
                    <h2 class="h2 mb-4">مهمتنا</h2>
                    <p class="opacity-90">
                        .نوفرو حلول تكنولوجية في المتناول و بجودة عالية<br> .ملخر شعارنا هو الإتقان
                    </p>
                </div>
                <div class="card variant-glass-surface p-8" in:fly={{ x: 50, duration: 500 }}>
                    <h2 class="h2 mb-4">علاش تختارنا نحنا</h2>
                    <ul class="list-inside space-y-2 opacity-90 rtl" style="list-style-position: inside; direction: rtl;">
                        <li class="before:content-['•'] before:ml-2 before:inline-block">أكثر من 15 سنة خبرة في مجال الإعلامية</li>
                        <li class="before:content-['•'] before:ml-2 before:inline-block">نحلولك المشاكل الي تواجهك بأسوام رمزية</li>
                        <li class="before:content-['•'] before:ml-2 before:inline-block">نفرولك سرفيس سريع و إستجابة أسرع</li>
                        <li class="before:content-['•'] before:ml-2 before:inline-block">نركزو على راحت العميل متاعنا</li>
                    </ul>
                </div>
            </div>

            <!-- Contact CTA -->
            <div 
                class="card variant-glass-primary p-8 text-center"
                in:fly={{ y: 50, duration: 500 }}
            >
                <h2 class="h2 mb-4">مستعد تجرب خدمتنا؟</h2>
                <p class="mb-6 opacity-90">bemo مثماش مستحيل مع</p>
                <div class="flex justify-center gap-4">
                    <a href="{base}/services" class="btn variant-filled">خدماتنا</a>
                    <a href="{base}/contact" class="btn variant-filled-primary">كلمنا →</a>
                </div>
            </div>
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

    /* Add new container glass effect */
    .container {
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }
</style>