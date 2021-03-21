<script lang="ts">
    import WelcomeText from './WelcomeText.svelte';
    import ContentPage from '../general/ContentPage.svelte';
    import Avatar from '../../assets/img/avatar.svg';
    import FadingProfileImages from './FadingProfileImages.svelte';
</script>

<ContentPage>
    <div class="profile-images">
        <FadingProfileImages />
    </div>
    <div class="avatar">
        <Avatar width={100} height={100} />
    </div>
    <div class="welcome-text-box">
        <WelcomeText />
    </div>
</ContentPage>

<style lang="scss">
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
