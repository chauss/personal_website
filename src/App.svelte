<script lang="ts">
    import Tailwind from './utils/Tailwind.svelte';
    import LocaleSelector from './components/general/LocaleSelector.svelte';
    import HeroContent from './components/hero/HeroContent.svelte';
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
<HeroContent />

<style lang="scss">
</style>
