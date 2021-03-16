<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const locales = ['de', 'en', 'es'];
    let selectedLocale = 'en';

    const selectLocale = (locale: string): void => {
        if (locale !== selectedLocale) {
            selectedLocale = locale;
            dispatch('locale-changed', locale);
        }
    };
</script>

<div class="text-white">
    {#each locales as locale, idx}
        <span class="cursor-pointer" class:font-bold={locale === selectedLocale} on:click={() => selectLocale(locale)}
            >{locale}</span
        >
        {#if idx < locales.length - 1}
            <span>{' | '}</span>
        {/if}
    {/each}
</div>

<style lang="scss">
</style>
