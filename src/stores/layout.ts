import { writable } from 'svelte/store';
import { LayoutSize } from '../types/layout';

const layoutStore = () => {
    const { subscribe, set } = writable<LayoutSize>(LayoutSize.xtraLarge);

    return {
        subscribe,
        set,
    };
};

export const layout = layoutStore();
