<script lang="ts">
    import { _ } from '../../utils/I18n';

    export let title: string;
    export let subtitle: string | undefined = undefined;
    export let info: string;
    export let alignRight: boolean = false;
</script>

<div class="description">
    <p class="title" class:text-right={alignRight}>{$_(title)}</p>
    {#if subtitle && subtitle !== ''}
        <p class="subtitle" class:text-right={alignRight}>{$_(subtitle)}</p>
    {/if}
    <div class="info-wrapper">
        <div class="background" />
        <p class="info" class:text-right={alignRight}>{$_(info)}</p>
    </div>
</div>

<style lang="scss">
    .description {
        width: 600px;
        max-width: 90vw;

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
                margin: 0;
                margin-top: 20px;
                color: var(--textColorMedium);
                font-size: var(--infoFontSize);

                line-height: 28px;
            }
        }
    }
</style>
