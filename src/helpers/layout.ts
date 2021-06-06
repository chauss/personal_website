import { LayoutSize } from '../types/layout';

export const currentLayoutFromWindow = (window: Window): LayoutSize => {
    const width = window.innerWidth;
    return currentLayoutFromWidth(width);
};

export const currentLayoutFromWidth = (windowWidth: number): LayoutSize => {
    if (windowWidth <= 640) {
        return LayoutSize.small;
    } else if (windowWidth <= 768) {
        return LayoutSize.medium;
    } else if (windowWidth <= 1024) {
        return LayoutSize.large;
    } else {
        return LayoutSize.xtraLarge;
    }
};
