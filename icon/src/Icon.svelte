<script>
  export let icon;
  $: styles = `--icon: url(https://api.iconify.design/${icon}.svg)`;
</script>

<i class="icon" style="{styles}">
  <slot />
</i>

<style lang="scss">
  @use "../../theme/src/theme";
  @include theme.default(true);

  i {
    min-width: 100%;
    min-height: 100%;
    background: var(--colors-text);
    mask: var(--icon) center / contain no-repeat;
    -webkit-mask: var(--icon) center / contain no-repeat;
  }
</style>