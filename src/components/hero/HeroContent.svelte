<script lang="ts">
    import WelcomeText from './WelcomeText.svelte';
    import ContentPage from '../general/ContentPage.svelte';
    import Avatar from '../../assets/img/avatar.svg';
</script>

<ContentPage>
    <div class="avatar">
        <Avatar width={100} height={100} />
    </div>
    <div class="welcome-text-box">
        <WelcomeText />
    </div>
</ContentPage>

<style lang="scss">
    .avatar {
        position: absolute;
        top: 24px;
        left: 72px;
    }
    .welcome-text-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 80px;
    }
</style>
