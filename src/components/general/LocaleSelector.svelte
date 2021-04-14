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
        <div
            class="language"
            class:selected={supportedlocale === $locale}
            on:click={() => onLocaleSelected(supportedlocale)}
        >
            {supportedlocale}
        </div>
        {#if idx < supportedLocales.length - 1}
            <span>{'|'}</span>
        {/if}
    {/each}
</div>

<style lang="scss">
    div {
        display: flex;
    }
    span {
        color: var(--textColorStrong);
    }
    .language {
        display: inline-block;
        text-align: center;
        user-select: none;
        border: none;
        width: 2rem;
        font-weight: lighter;
        cursor: pointer;
        color: var(--textColorStrong);

        &.selected {
            font-weight: bolder;
            color: var(--primaryColor);
        }

        &:hover {
            color: var(--primaryColor);
        }
    }
</style>
