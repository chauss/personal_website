<script lang="ts">
    import WelcomeText from './WelcomeText.svelte';
    import ContentPage from '../general/ContentPage.svelte';
    import Avatar from '../../assets/img/avatar.svg';
</script>

<ContentPage>
    <img src="assets/images/hero_avatar_profile.png" alt="hero_avatar" />
    <div class="avatar">
        <Avatar width={100} height={100} />
    </div>
    <div class="welcome-text-box">
        <WelcomeText />
    </div>
</ContentPage>

<style lang="scss">
    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        max-height: 60%;
        max-width: 50%;
        height: auto;
        width: auto;
    }
    .avatar {
        position: absolute;
        top: 24px;
        left: var(--marginLeft);
    }
    .welcome-text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
