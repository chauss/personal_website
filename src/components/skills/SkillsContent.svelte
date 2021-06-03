<script lang="ts">
    import ContentPage from '../general/ContentPage.svelte';
    import Description from '../general/Description.svelte';
    import SkillSet from './SkillSet.svelte';
</script>

<ContentPage>
    <div class="descr-pos">
        <Description title="skills.title" info="skills.info" alignRight />
    </div>
    <div class="skills-lang-pos">
        <SkillSet
            skillSetObject={{
                setName: 'Programmier-sprachen',
                subSkills: ['javascript (& ts)', 'dart', 'python', 'swift', 'GO'],
            }}
            degreeOffset={-30}
        />
    </div>
    <div class="skills-style-pos">
        <SkillSet
            skillSetObject={{
                setName: 'Code Style',
                subSkills: ['Clean Code', 'Pattern', 'Lesbarkeit', 'Benamung'],
            }}
            degreeOffset={70}
        />
    </div>
    <div class="skills-tech-pos">
        <SkillSet
            skillSetObject={{
                setName: 'Frameworks / Technologien',
                subSkills: ['flutter', 'react', 'svelte', 'redux', 'babylonjs'],
            }}
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

    .skills-lang-pos {
        position: absolute;
        top: 15%;
        left: 200px;
    }
    .skills-style-pos {
        position: absolute;
        top: 50%;
        left: 550px;
    }
    .skills-tech-pos {
        position: absolute;
        top: 40%;
        left: 1050px;
    }
</style>
