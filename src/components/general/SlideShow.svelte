<script lang="ts">
    export let components: Object[] = [];
</script>

<div class="slideshow">
    <div class="content">
        {#each components as component}
            <svelte:component this={component} />
        {/each}
    </div>
</div>

<style lang="scss">
    .slideshow {
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 0 40px;
        .content {
            display: flex;
            justify-content: space-between;
            width: 950px;
            flex-direction: row;
        }
    }
</style>
