<script lang="ts">
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths';
</script>

<div 
    class="container mx-auto min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center p-4"
    in:fade={{ duration: 300 }}
>
    <div class="card variant-glass-surface p-8 max-w-lg w-full">
        <h1 class="h1 mb-4">الصفحة غير موجودة</h1>
        <h1 class="h1 mb-4">404</h1>
        <p class="mb-8 opacity-90">عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
        <div class="flex justify-center gap-4">
            <a href="{base}/" class="btn variant-filled-primary">الصفحة الرئيسية</a>
            <a href="{base}/services" class="btn variant-filled">خدماتنا</a>
        </div>
    </div>
</div>