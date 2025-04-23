<script lang="ts">
    export let icon: string;
    export let title: string;
    export let description: string;
    export let bgColor: string;
    export let id: string;
    export let links: Array<{ href: string; text: string; badge: string; variant: string }>;

    function handleCardScroll(e: MouseEvent | TouchEvent | KeyboardEvent) {
        if (e.type === 'keydown' && (e as KeyboardEvent).key !== 'Enter') {
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
</script>

<button
    {id}
    type="button"
    class="card variant-ghost-surface p-8 space-y-6 w-full text-right"
    on:click={handleCardScroll}
    on:keydown={handleCardScroll}
>
    <div class="flex items-center gap-4 flex-row-reverse">
        <div class="{bgColor} p-3 rounded-full">
            <span class="text-2xl">{icon}</span>
        </div>
        <div>
            <h3 class="h3">{title}</h3>
            <p class="opacity-80">{@html description}</p>
        </div>
    </div>
    <div class="space-y-4">
        {#each links as link}
            <a href={link.href} class="btn !rounded {link.variant} w-full justify-between flex-row-reverse">
                {link.text}
                <span class="badge">{link.badge}</span>
            </a>
        {/each}
    </div>
</button>