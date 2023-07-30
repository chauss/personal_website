<script lang="ts">
    import { _ } from '../../utils/I18n';

    export let iconPath: any;
    export let link: string;
</script>

<div class="socialmedia" on:click={() => window.open(link, '_blank')}>
    <div class="border" />
    <div class="icon-pos">
        <img class="icon" src={iconPath} alt="" />
    </div>
</div>

<style lang="scss">
    .socialmedia {
        cursor: pointer;
        background-color: transparent;
        height: 120px;
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

        .icon-pos {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .icon {
                display: block;
                max-height: 60px;
                max-width: 250px;
                width: auto;
                height: auto;
            }
        }
    }
</style>
