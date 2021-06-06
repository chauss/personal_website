<script lang="ts" context="module">
    export type SkillSetObject = {
        setName: string;
        subSkills: string[];
    };
</script>

<script lang="ts">
    import { layout } from '../../stores/layout';
    import cssVariables from '../../actions/CssVariables';
    import SkillBubble, { SkillSize } from './SkillBubble.svelte';
    import { LayoutSize } from '../../types/layout';

    export let skillSetObject: SkillSetObject;
    export let degreeOffset = 0;

    const separation = 360 / skillSetObject.subSkills.length;

    let mainSkill: HTMLElement;

    // INFO This is not responsive as the width-change does not trigger a recalculation
    $: radius = $layout === LayoutSize.small ? 60 : 100;
    $: totalSize = 2 * radius + mainSkill?.getBoundingClientRect().width;
</script>

<div class="skill-set-container" use:cssVariables={{ totalSize: `${totalSize}px` }}>
    <div class="main-skill-pos">
        <SkillBubble name={skillSetObject.setName} size={SkillSize.large} bind:element={mainSkill} />
    </div>
    {#each skillSetObject.subSkills as subSkill, idx}
        <div class="sub-skill-pos" use:cssVariables={{ rotation: `${separation * idx + degreeOffset}deg` }}>
            <div class="sub-skill-rot">
                <SkillBubble name={subSkill} size={SkillSize.small} />
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .skill-set-container {
        position: relative;
        display: flex;
        width: var(--totalSize);
        height: var(--totalSize);

        .main-skill-pos {
            margin: auto;
        }
        .sub-skill-pos {
            position: absolute;
            margin: 0 auto;
            left: 50%;
            transform: translateX(-50%) rotate(var(--rotation));
            transform-origin: center calc(var(--totalSize) / 2);
            .sub-skill-rot {
                transform: rotate(calc(var(--rotation) * -1));
            }
        }
    }
</style>
