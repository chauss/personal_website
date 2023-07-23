<script lang="ts">
    import ContentPage from '../general/ContentPage.svelte';
    import Description from '../general/Description.svelte';
    import Work from './Work.svelte';
</script>

<ContentPage>
    <div class="descr-pos">
        <Description title="mywork.title" info="mywork.info" alignRight />
    </div>
    <div class="mywork-pos">
        <Work
            name="mywork.github.name"
            iconPath={'assets/images/mywork/github-dark-mode.svg'}
            description="mywork.github.description"
            link="https://github.com/chauss"
        />
        <Work
            name="mywork.recipy.name"
            iconPath={'assets/images/mywork/recipy.png'}
            description="mywork.recipy.description"
            link="https://recipy-app.de"
        />
    </div>
</ContentPage>

<style lang="scss">
    .descr-pos {
        position: absolute;
        right: var(--sidePaddingRight);
        top: 10%;
    }

    .mywork-pos {
        position: absolute;
        top: 50%;
        display: grid;
        grid-template-columns: repeat(var(--myworkGridColumns), auto);
        gap: 12px;
    }
</style>
