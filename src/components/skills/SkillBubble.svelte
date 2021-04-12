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
    {name}
</div>

<style lang="scss">
    .bubble {
        background-color: var(--primaryColor);
        border-radius: 50%;
        text-align: center;

        &.small {
            height: 64px;
            width: 64px;
            line-height: 64px;
        }
        &.medium {
            height: 88px;
            width: 88px;
            line-height: 88px;
        }
        &.large {
            height: 120px;
            width: 120px;
            line-height: 120px;
        }
    }
</style>
