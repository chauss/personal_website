<script lang="ts">
    import cssVariables from '../../actions/CssVariables';
    import type { LayoutValues } from '../../types/layout';
    import { layout } from '../../config/layout';

    let windowWidth = window.innerWidth;

    const getLayoutForSize = (width: number): LayoutValues => {
        if (width <= 640) {
            return layout.small;
        } else if (width <= 768) {
            return layout.medium;
        } else if (width <= 1024) {
            return layout.large;
        } else {
            return layout.xtralarge;
        }
    };
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div use:cssVariables={getLayoutForSize(windowWidth)}>
    <slot />
</div>
