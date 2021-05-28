<script lang="ts">
    import ContentPage from '../general/ContentPage.svelte';
    import Description from '../general/Description.svelte';
    import SkillSet from './SkillSet.svelte';
</script>

<ContentPage>
    <div class="descr-pos">
        <Description title="skills.title" info="skills.info" alignRight />
    </div>
    <div class="skills-pos">
        <SkillSet
            skillSetObject={{ setName: 'Programmier-sprachen', subSkills: ['svelte', 'java', 'python', 'swift'] }}
            degreeOffset={60}
        />
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
