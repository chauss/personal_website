<script lang="ts">
    import { _ } from '../../utils/I18n';

    export let name: string;
    export let iconPath: any;
    export let description: string;
    export let link: string;
</script>

<div class="work" on:click={() => window.open(link, '_blank')}>
    <div class="border" />
    <div class="title">{$_(name)}</div>
    <div class="icon-pos">
        <img class="icon" src={iconPath} alt={$_(name) + ' icon'} />
    </div>
    <div class="description">{$_(description)}</div>
</div>

<style lang="scss">
    .work {
        cursor: pointer;
        background-color: transparent;
        height: 200px;
        width: 300px;
        position: relative;

        .border {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            border-radius: 8px;
            border: var(--textColorLight) 4px solid;
        }

        .title {
            padding-top: 8px;
            padding-left: 16px;
            color: var(--primaryColor);
            font-size: var(--subtitleFontSize);
            background-color: 0xffffff33;
        }
        .icon-pos {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
                height: 100px;
                width: 100px;
            }
        }
        .description {
            padding-top: 16px;
            color: var(--textColorMedium);
            font-size: var(--infoFontSize);
            text-align: center;
        }
    }
</style>
