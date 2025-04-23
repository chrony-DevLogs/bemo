import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ url }) => ({
    serviceName: url.searchParams.get('sn') || '',
    emoji: url.searchParams.get('e') || '🤙',
    bgClass: url.searchParams.get('bg') || 'bg-tertiary-500/20'
});