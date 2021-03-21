<script lang="ts">
    let height = window.innerHeight;
    let width = window.innerWidth;
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
<div class="content-page" style={`height: ${height - 20}px; width: ${width - 20}px;`}>
    <slot />
</div>

<style lang="scss">
    .content-page {
        padding-left: var(--sidePaddingLeft);
    }
</style>
