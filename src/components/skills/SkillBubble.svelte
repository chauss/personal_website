<script lang="ts" context="module">
    export enum SkillSize {
        small,
        medium,
        large,
    }
</script>

<script lang="ts">
    import Line from '../general/Line.svelte';

    export let name: string;
    export let size: SkillSize;
    export let connectTo: [number, number] | undefined = undefined;
    export let element: HTMLElement | undefined = undefined;

    let thisPosition: [number, number];
    $: if (element) {
        thisPosition = [element.offsetLeft + element.offsetWidth / 2, element.offsetTop + element.offsetHeight / 2];
    }

    let relativeConnectTo: [number, number];
    $: if (element && connectTo) {
        // TODO Get offsetLeft and offsetTop to skill-set-container
        let offsetLeftInSkillSetContainer = 0;
        console.log({ offsetParent: element });
        console.log({ offsetLeft: element.getBoundingClientRect() });
        let parent: HTMLElement | null = element;
        while (parent && !parent.className.includes('skill-set-container')) {
            console.log({ offsetParent: parent.parentElement });
            parent = parent.offsetParent as HTMLElement;
            console.log({ offsetTop: parent.getBoundingClientRect() });
            offsetLeftInSkillSetContainer += parent.getBoundingClientRect().left;
        }
        console.log({ offsetInSkillSetContainer: offsetLeftInSkillSetContainer });
        console.log('##############################');
        relativeConnectTo = [connectTo[0] - offsetLeftInSkillSetContainer, connectTo[1] - element.offsetTop];
    }
</script>

<div
    class="bubble"
    class:small={size === SkillSize.small}
    class:medium={size === SkillSize.medium}
    class:large={size === SkillSize.large}
    bind:this={element}
>
    <p>{name}</p>
    {#if connectTo && thisPosition && relativeConnectTo}
        <Line x1={thisPosition[0]} y1={thisPosition[1]} x2={relativeConnectTo[0]} y2={relativeConnectTo[1]} />
    {/if}
</div>

<style lang="scss">
    .bubble {
        position: relative;
        background-color: var(--primaryColor);
        border-radius: 50%;
        text-align: center;
        color: var(--textColorStrong);

        &.small {
            height: 64px;
            width: 64px;
        }
        &.medium {
            height: 88px;
            width: 88px;
        }
        &.large {
            height: 132px;
            width: 132px;
        }
        p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: 20px;
        }
    }
</style>
