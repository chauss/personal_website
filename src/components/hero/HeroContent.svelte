<script lang="ts">
    import WelcomeText from './WelcomeText.svelte';
    import ContentPage from '../general/ContentPage.svelte';
    import Selectors from '../general/Selectors.svelte';
    import FadingProfileImages from './FadingProfileImages.svelte';
</script>

<ContentPage
    ><div class="selectors-pos">
        <Selectors />
    </div>
    <div class="profile-images">
        <FadingProfileImages />
    </div>
    <div class="welcome-text-box">
        <WelcomeText />
    </div>
</ContentPage>

<style lang="scss">
    .selectors-pos {
        position: absolute;
        top: 48px;
        right: var(--sidePaddingRight);
        z-index: 100;
    }
    .profile-images {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        height: 60%;
        max-height: 60%;
        max-width: 50%;
        width: 50%;
    }
    .welcome-text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
