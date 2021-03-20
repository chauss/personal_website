<script lang="ts">
    import { _ } from '../../utils/I18n';
</script>

<p class="title">{$_('hero.title')}</p>
<p class="subtitle">{$_('hero.subtitle')}</p>
<div class="info-wrapper">
    <div class="background" />
    <p class="info">{$_('hero.info')}</p>
</div>

<style lang="scss">
    .title {
        color: var(--primaryColor);
        font-size: var(--titleFontSize);
        max-width: 100%;
    }
    .subtitle {
        margin-top: -8px;
        color: var(--textColorLight);
        font-size: var(--subtitleFontSize);
    }

    .info-wrapper {
        position: relative;
        .background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--backgroundColor);
            opacity: 0.4;
            z-index: -1;
            border-radius: 5px;
        }

        .info {
            margin-top: 20px;
            color: var(--textColorMedium);
            font-size: var(--infoFontSize);
            width: 480px;
            max-width: 90vw;
            line-height: 28px;
        }
    }
</style>
