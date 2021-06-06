<script lang="ts">
    export let condition: boolean;
    export let wrapperClass: string;
</script>

{#if condition}
    <div class={wrapperClass}>
        <slot />
    </div>
{:else}
    <slot />
{/if}

<style lang="scss">
</style>
