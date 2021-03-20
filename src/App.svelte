<script lang="ts">
    import Tailwind from './utils/Tailwind.svelte';
    import LocaleSelector from './components/general/LocaleSelector.svelte';
    import HeroContent from './components/hero/HeroContent.svelte';
    import { initI18n, _ } from './utils/I18n';
    import ThemeSelector from './components/general/ThemeSelector.svelte';
    import CssThemeProvider from './components/general/CssThemeProvider.svelte';
    import CssLayoutProvider from './components/general/CssLayoutProvider.svelte';

    initI18n();
    const onLocaleChanged = () => {
        // TODO reload site to start animations in different lang
    };
</script>

<Tailwind />
<CssThemeProvider>
    <CssLayoutProvider>
        <div class="selectors">
            <div class="theme-selector">
                <ThemeSelector />
            </div>
            <LocaleSelector on:locale-changed={onLocaleChanged} />
        </div>
        <HeroContent />
    </CssLayoutProvider>
</CssThemeProvider>

<style lang="scss">
    .selectors {
        position: absolute;
        top: 48px;
        right: 80px;
        display: flex;

        .theme-selector {
            margin-top: -4px;
            padding-right: 80px;
        }
    }
</style>
