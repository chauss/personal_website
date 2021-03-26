<script lang="ts">
    import HeroContent from './components/hero/HeroContent.svelte';
    import SkillsContent from './components/skills/SkillsContent.svelte';
    import Avatar from './assets/img/avatar.svg';
    import Selectors from './components/general/Selectors.svelte';
</script>

<div class="avatar-pos">
    <Avatar width={100} height={100} />
</div>
<div class="selectors-pos">
    <Selectors />
</div>
<HeroContent />
<SkillsContent />

<style lang="scss">
    .avatar-pos {
        position: fixed;
        top: 24px;
        left: var(--sidePaddingLeft);
        z-index: 100;
    }
    .selectors-pos {
        position: fixed;
        top: 48px;
        right: var(--sidePaddingRight);
        z-index: 100;
    }
</style>
