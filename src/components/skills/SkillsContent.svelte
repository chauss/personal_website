<script lang="ts">
    import ContentPage from '../general/ContentPage.svelte';
    import Description from '../general/Description.svelte';
</script>

<ContentPage>
    <div class="descr-pos">
        <Description title="skills.title" info="skills.info" alignRight />
    </div>
</ContentPage>

<style lang="scss">
    .descr-pos {
        position: absolute;
        right: var(--sidePaddingRight);
        top: 10%;
    }
</style>
