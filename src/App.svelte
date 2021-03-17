<script lang="ts">
    import Tailwind from './utils/Tailwind.svelte';
    import LocaleSelector from './components/LocaleSelector.svelte';
    import { initI18n, _ } from './utils/I18n';

    initI18n();
    const onLocaleChanged = () => {
        // TODO reload site to start animations in different lang
    };
</script>

<Tailwind />
<div class="absolute top-0 right-0 pr-20 pt-12">
    <LocaleSelector on:locale-changed={onLocaleChanged} />
</div>
<main class="container mx-auto">
    <h1 class="text-blue-600 p-6 hover:text-blue-300 text-center">{$_('title', { values: { name: 'Chris' } })}</h1>
</main>

<style lang="scss">
    main {
        h1 {
            font-size: 15rem;
        }
    }
</style>
