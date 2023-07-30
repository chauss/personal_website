<script lang="ts">
    import ContentPage from '../general/ContentPage.svelte';
    import Description from '../general/Description.svelte';
    import SocialMedia from './SocialMedia.svelte';
</script>

<ContentPage>
    <div class="descr-pos">
        <Description title="mysocialmedia.title" info="mysocialmedia.info" />
    </div>
    <div class="mysocialmedia-pos">
        <SocialMedia
            iconPath={'assets/images/socialmedia/linkedin.png'}
            link="https://www.linkedin.com/in/christopher-hau%C3%9F-6632361b0/"
        />
        <SocialMedia
            iconPath={'assets/images/socialmedia/xing.png'}
            link="https://www.xing.com/profile/Christopher_Hauss3/cv"
        />
    </div>
</ContentPage>

<style lang="scss">
    .descr-pos {
        position: absolute;
        left: var(--sidePaddingLeft);
        top: 10%;
    }

    .mysocialmedia-pos {
        position: absolute;
        top: 50%;
        display: grid;
        grid-template-columns: repeat(var(--mysocialmediaGridColumns), auto);
        gap: 12px;
    }
</style>
