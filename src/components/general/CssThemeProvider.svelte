<script lang="ts">
    import { theme } from '../../stores/theme';
    import cssVariables from '../../actions/CssVariables';
</script>

<div use:cssVariables={$theme.colors}>
    <slot />
</div>
