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

<div class="text-white">
    {#each supportedLocales as supportedlocale, idx}
        <span
            class="cursor-pointer"
            class:font-bold={supportedlocale === $locale}
            on:click={() => onLocaleSelected(supportedlocale)}>{supportedlocale}</span
        >
        {#if idx < supportedLocales.length - 1}
            <span>{' | '}</span>
        {/if}
    {/each}
</div>

<style lang="scss">
</style>
