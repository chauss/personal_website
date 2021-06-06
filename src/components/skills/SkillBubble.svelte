<script lang="ts" context="module">
    export enum SkillSize {
        small,
        large,
    }
</script>

<script lang="ts">
    import { layout } from '../../stores/layout';
    import { LayoutSize } from '../../types/layout';

    export let name: string;
    export let size: SkillSize;
    export let element: HTMLElement | undefined = undefined;
</script>

<div
    class="bubble"
    class:small={size === SkillSize.small}
    class:large={size === SkillSize.large}
    class:mobile={$layout === LayoutSize.small}
    bind:this={element}
>
    <p>{name}</p>
</div>

<style lang="scss">
    .bubble {
        position: relative;
        background-color: var(--primaryColor);
        border-radius: 50%;
        text-align: center;
        color: var(--textColorStrong);

        &.small {
            opacity: 0.85;
            height: 88px;
            width: 88px;
            &.mobile {
                height: 76px;
                width: 76px;
            }
        }
        &.large {
            height: 132px;
            width: 132px;
            &.mobile {
                height: 120px;
                width: 120px;
            }
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
