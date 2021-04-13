<script lang="ts" context="module">
    export type SkillSetObject = {
        setName: string;
        subSkills: string[];
    };
</script>

<script lang="ts">
    import cssVariables from '../../actions/CssVariables';
    import SkillBubble, { SkillSize } from './SkillBubble.svelte';

    export let skillSetObject: SkillSetObject;
    export let degreeOffset = 0;

    const separation = 360 / skillSetObject.subSkills.length;
</script>

<div class="container">
    <div class="main-skill-pos">
        <SkillBubble name={skillSetObject.setName} size={SkillSize.large} />
    </div>
    {#each skillSetObject.subSkills as subSkill, idx}
        <div class="sub-skill-pos" use:cssVariables={{ rotation: `${separation * idx + degreeOffset}deg` }}>
            <div class="sub-skill-rot">
                <SkillBubble name={subSkill} size={SkillSize.medium} />
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    $radius: 180px;
    $mediumBubbleSizeHalf: 44px;
    $totalSize: 2 * $radius + $mediumBubbleSizeHalf;

    .container {
        display: flex;
        width: $totalSize;
        height: $totalSize;

        .main-skill-pos {
            margin: auto;
        }
        .sub-skill-pos {
            position: absolute;
            margin: 0 auto;
            left: 50%;
            transform: translateX(-50%) rotate(var(--rotation));
            transform-origin: center $totalSize / 2;
            .sub-skill-rot {
                transform: rotate(calc(var(--rotation) * -1));
            }
        }
    }
</style>
