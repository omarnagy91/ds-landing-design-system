<script>
  export let primary;
</script>

<button on:click class:primary="{primary}" {...$$restProps}>
  <slot>Button</slot>
</button>

<style lang="scss">
  @use "../../theme/src/theme";
  @include theme.default(true);

  button {
    background-color: var(--colors-surface);
    color: var(--colors-text);
    border: var(--border-none);
    padding: var(--spacing-base);
    border-radius: var(--rounded-pills);

    &[disabled] {
      opacity: var(--opacity-disabled);
      cursor: not-allowed;
    }

    &.primary {
      background-color: var(--colors-primary);
      color: var(--colors-text-on-primary);
    }
  }
</style>