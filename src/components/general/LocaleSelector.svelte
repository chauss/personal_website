<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { supportedLocales } from '../../config/I10n';
    import { locale, switchLocaleTo } from '../../utils/I18n';

    const dispatch = createEventDispatcher();
    const onLocaleSelected = (newLocale: string): void => {
        if (newLocale !== $locale) {
            dispatch('locale-changed', newLocale);
            switchLocaleTo(newLocale);
        }
    };
</script>

<div>
    {#each supportedLocales as supportedlocale, idx}
        <span
            class="language"
            class:selected={supportedlocale === $locale}
            on:click={() => onLocaleSelected(supportedlocale)}>{supportedlocale}</span
        >
        {#if idx < supportedLocales.length - 1}
            <span>{'|'}</span>
        {/if}
    {/each}
</div>

<style lang="scss">
    span {
        color: var(--textColorStrong);
        padding: 0 2px;
    }

    .language {
        user-select: none;
        font-weight: lighter;
        padding: 0 0 0 4px;
        cursor: pointer;

        &.selected {
            font-weight: bolder;
            color: var(--primaryColor);
        }

        &:hover {
            color: var(--primaryColor);
        }
    }
</style>
