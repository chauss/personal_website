<script lang="ts">
    import Tailwind from './utils/Tailwind.svelte';
    import LocaleSwitch from './components/LocaleSwitch.svelte';
</script>

<Tailwind />
<LocaleSwitch />
<main class="container mx-auto">
    <h1 class="text-blue-500 p-6 hover:text-blue-300 text-center">Hello!</h1>
</main>

<style lang="scss">
    main {
        h1 {
            font-size: 15rem;
        }
    }
</style>
