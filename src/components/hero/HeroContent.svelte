<script lang="ts">
    import WelcomeText from './WelcomeText.svelte';
    import ContentPage from '../general/ContentPage.svelte';
</script>

<ContentPage>
    <div class="welcome-text-box">
        <WelcomeText />
    </div>
</ContentPage>

<style lang="scss">
    .welcome-text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 80px;
    }
</style>
