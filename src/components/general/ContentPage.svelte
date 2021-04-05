<script lang="ts">
    let height = window.innerHeight;
    let width = window.innerWidth;
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
<div class="content-page" style={`height: ${height - 20}px;`}>
    <slot />
</div>

<style lang="scss">
    .content-page {
        position: relative;
        padding-left: var(--sidePaddingLeft);
        width: 100%;
    }
</style>
