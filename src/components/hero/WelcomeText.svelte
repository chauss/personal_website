<script lang="ts">
    import { _ } from '../../utils/I18n';
</script>

<p class="title">{$_('hero.title')}</p>
<p class="subtitle">{$_('hero.subtitle')}</p>
<p class="info">{$_('hero.info')}</p>

<style lang="scss">
    .title {
        color: white;
        font-size: 72px;
    }
    .subtitle {
        margin-top: -8px;
        color: rgba(white, 0.86);
        font-size: 24px;
    }
    .info {
        margin-top: 20px;
        color: rgba(white, 0.6);
        font-size: 18px;
        width: 480px;
    }
</style>
