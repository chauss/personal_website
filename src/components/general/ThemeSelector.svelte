<script lang="ts">
    import cssVariables from '../../actions/CssVariables';
    import themes from '../../config/themes';
    import { theme } from '../../stores/theme';
</script>

<div class="theme-selector">
    {#each themes as possibleTheme}
        <div
            class="theme"
            class:selected={possibleTheme.name === $theme.name}
            on:click={() => theme.setByName(possibleTheme.name)}
            use:cssVariables={{ themeColor: possibleTheme.colors.primaryColor }}
        />
    {/each}
</div>

<style lang="scss">
    .theme-selector {
        display: flex;
        .theme {
            cursor: pointer;
            width: 32px;
            height: 32px;
            border-radius: 16px;
            margin: 0 8px;
            background-color: var(--themeColor);
            transition: opacity 0.3s ease-in-out;
            opacity: 0.6;

            &.selected,
            &:hover {
                opacity: 1;
            }
        }
    }
</style>
