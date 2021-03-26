<script lang="ts">
    import ThemeSelector from './ThemeSelector.svelte';
    import LocaleSelector from './LocaleSelector.svelte';
</script>

<div class="selectors flex flex-col md:flex-row">
    <ThemeSelector />
    <div class="separator" />
    <LocaleSelector />
</div>

<style lang="scss">
    .separator {
        width: 40px;
    }
</style>
