<script lang="ts">
    import Tailwind from './utils/Tailwind.svelte';
    import { initI18n, _ } from './utils/I18n';
    import CssThemeProvider from './components/general/CssThemeProvider.svelte';
    import CssLayoutProvider from './components/general/CssLayoutProvider.svelte';
    import Page from './Page.svelte';

    initI18n();
</script>

<Tailwind />
<CssThemeProvider>
    <CssLayoutProvider>
        <Page />
    </CssLayoutProvider>
</CssThemeProvider>

<style lang="scss">
</style>
