<script lang="ts">
    import ContentPage from '../general/ContentPage.svelte';
    import Description from '../general/Description.svelte';
    import SkillBubble, { SkillSize } from './SkillBubble.svelte';
</script>

<ContentPage>
    <div class="descr-pos">
        <Description title="skills.title" info="skills.info" alignRight />
    </div>
    <div class="skills-pos">
        <SkillBubble name="Svelte" size={SkillSize.small} />
    </div>
</ContentPage>

<style lang="scss">
    .descr-pos {
        position: absolute;
        right: var(--sidePaddingRight);
        top: 10%;
    }

    .skills-pos {
        position: absolute;
        top: 50%;
    }
</style>
