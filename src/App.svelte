<script lang="ts">
    import Tailwind from './utils/Tailwind.svelte';
    import LocaleSwitch from './components/LocaleSwitch.svelte';

    const switchLocale = (event: CustomEvent) => {
        console.log(`Switching locale to ${event.detail}`);
    };
</script>

<Tailwind />
<div class="absolute top-0 right-0 pr-20 pt-12">
    <LocaleSwitch on:locale-changed={switchLocale} />
</div>
<main class="container mx-auto">
    <h1 class="text-blue-600 p-6 hover:text-blue-300 text-center">Hello!</h1>
</main>

<style lang="scss">
    main {
        h1 {
            font-size: 15rem;
        }
    }
</style>
