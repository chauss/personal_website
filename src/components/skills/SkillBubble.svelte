<script lang="ts" context="module">
    export enum SkillSize {
        small,
        medium,
        large,
    }
</script>

<script lang="ts">
    export let name: string;
    export let size: SkillSize;
</script>

<div
    class="bubble"
    class:small={size === SkillSize.small}
    class:medium={size === SkillSize.medium}
    class:large={size === SkillSize.large}
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
