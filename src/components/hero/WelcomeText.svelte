<script lang="ts">
    import { _ } from '../../utils/I18n';
</script>

<p class="title">{$_('hero.title')}</p>
<p class="subtitle">{$_('hero.subtitle')}</p>
<p class="info">{$_('hero.info')}</p>

<style lang="scss">
    .title {
        color: var(--primaryColor);
        font-size: 72px;
    }
    .subtitle {
        margin-top: -8px;
        color: var(--textColorLight);
        font-size: 24px;
    }
    .info {
        margin-top: 20px;
        color: var(--textColorMedium);
        font-size: 18px;
        width: 480px;
        line-height: 28px;
    }
</style>
