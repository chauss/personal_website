<script lang="ts">
    import { layout } from '../../stores/layout';
    import { LayoutSize } from '../../types/layout';
    import ConditinalWrapper from '../general/ConditinalWrapper.svelte';
    import SkillSet from './SkillSet.svelte';

    $: isSmallScreen = $layout === LayoutSize.small || $layout === LayoutSize.medium;
</script>

<ConditinalWrapper condition={!isSmallScreen} wrapperClass="absolute top-1/3 md:top-1/3 lg:top-15p xl:left-10p">
    <SkillSet
        skillSetObject={{
            setName: 'Programmier-sprachen',
            subSkills: ['javascript (& ts)', 'dart', 'python', 'swift', 'GO'],
        }}
        degreeOffset={-30}
    />
</ConditinalWrapper>
<ConditinalWrapper
    condition={!isSmallScreen}
    wrapperClass="absolute top- md:bottom-5p md:left-1/4 lg:top-1/2 lg:left-40p transform lg:-translate-x-1/2"
>
    <SkillSet
        skillSetObject={{
            setName: 'Code Style',
            subSkills: ['Clean Code', 'Pattern', 'Lesbarkeit', 'Benamung'],
        }}
        degreeOffset={70}
    />
</ConditinalWrapper>
<ConditinalWrapper condition={!isSmallScreen} wrapperClass="absolute md:top-40p md:right-10p xl:top-40p xl:right-10p">
    <SkillSet
        skillSetObject={{
            setName: 'Frameworks / Technologien',
            subSkills: ['flutter', 'react', 'svelte', 'redux', 'babylonjs'],
        }}
        degreeOffset={30}
    />
</ConditinalWrapper>

<style lang="scss">
</style>
