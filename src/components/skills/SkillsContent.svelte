<script lang="ts">
    import { layout } from '../../stores/layout';
    import { LayoutSize } from '../../types/layout';
    import ContentPage from '../general/ContentPage.svelte';
    import Description from '../general/Description.svelte';
    import SlideShow from '../general/SlideShow.svelte';
    import MySkills from './MySkills.svelte';

    $: isSmallScreen = $layout === LayoutSize.small || $layout === LayoutSize.medium;
</script>

<ContentPage>
    <div class="descr-pos">
        <Description title="skills.title" info="skills.info" alignRight />
    </div>
    {#if !isSmallScreen}
        <MySkills />
    {:else}
        <SlideShow>
            <MySkills />
        </SlideShow>
    {/if}
</ContentPage>

<style lang="scss">
    .descr-pos {
        display: flex;
        justify-content: right;
        padding-top: 10%;
        padding-right: var(--sidePaddingRight);
    }
</style>
