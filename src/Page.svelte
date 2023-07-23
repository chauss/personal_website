<script lang="ts">
    import HeroContent from './components/hero/HeroContent.svelte';
    import MyWorkContent from './components/mywork/MyWorkContent.svelte';
    import Avatar from './assets/img/avatar.svg';
</script>

<div class="avatar-pos">
    <Avatar width={100} height={100} />
</div>

<HeroContent />
<MyWorkContent />

<style lang="scss">
    .avatar-pos {
        position: fixed;
        top: 24px;
        left: var(--sidePaddingLeft);
        z-index: 100;
    }
</style>
