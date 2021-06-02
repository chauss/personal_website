<script lang="ts">
    export let x1: number;
    export let y1: number;
    export let x2: number;
    export let y2: number;

    $: viewBoxWidth = Math.abs(Math.max(x1, x2) - Math.min(x1, x2));
    $: viewBoxHeight = Math.abs(Math.max(y1, y2) - Math.min(y1, y2));
</script>

<svg width={viewBoxWidth} height={viewBoxHeight}>
    <line class="line" {x1} {y1} {x2} {y2} />
</svg>

<style lang="scss">
    .line {
        stroke: var(--primaryColor);
        stroke-width: 4px;
    }
</style>
