<script lang="ts">
    import ThemeSelector from './ThemeSelector.svelte';
    import LocaleSelector from './LocaleSelector.svelte';
</script>

<div class="selectors flex flex-col md:flex-row">
    <ThemeSelector />
    <div class="separator" />
    <div class="locale-pos">
        <LocaleSelector />
    </div>
</div>

<style lang="scss">
    .separator {
        width: 40px;
        height: 16px;
    }

    .locale-pos {
        display: flex;
        justify-content: flex-end;
    }
</style>
