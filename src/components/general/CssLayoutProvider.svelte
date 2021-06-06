<script lang="ts">
    import cssVariables from '../../actions/CssVariables';
    import { LayoutSize, LayoutValues } from '../../types/layout';
    import { layout as layoutConfig } from '../../config/layout';
    import { currentLayoutFromWidth } from '../../helpers/layout';
    import { layout as layoutStore } from '../../stores/layout';

    let windowWidth = window.innerWidth;

    $: layoutStore.set(currentLayoutFromWidth(windowWidth));

    const getLayoutForSize = (width: number): LayoutValues => {
        const layoutSize = currentLayoutFromWidth(width);

        if (layoutSize === LayoutSize.small) {
            return layoutConfig.small;
        } else if (layoutSize === LayoutSize.medium) {
            return layoutConfig.medium;
        } else if (layoutSize === LayoutSize.large) {
            return layoutConfig.large;
        } else {
            return layoutConfig.xtralarge;
        }
    };
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div use:cssVariables={getLayoutForSize(windowWidth)}>
    <slot />
</div>
