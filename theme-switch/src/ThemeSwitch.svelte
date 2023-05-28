<script>
  import { onMount } from 'svelte';
  import Button from '../../button/src/Button.svelte';
  import Icon from '../../icon/src/Icon.svelte';

  let mq, userDark, osDark, isUserSet, root;

  function switchTheme() {
    isUserSet = true;
    userDark = !userDark;
  }

  function setColorScheme(dark) {
    if (!root) return
    root.setAttribute('color-scheme', dark ? 'dark' : 'light');
    root.dataset.theme = dark ? 'dark' : 'light';
    root.classList.toggle('dark', dark)
  }

  onMount(() => {
    mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    userDark = mq.matches;
    osDark = mq.matches;
    isUserSet = false;
    root = document.documentElement;
    mq.addEventListener('change', () => osDark = mq.matches);
  });

  $: icon = ((isUserSet && userDark) || (!isUserSet && osDark)) ? 'sun-bold' : 'moon-fill';
  $: setColorScheme(userDark);
</script>

<div class="wrapper">
  <Button class="switch" primary on:click={switchTheme}>
    <Icon icon="ph:{icon}" />
  </Button>
</div>

<style lang="scss">
  @use "../../theme/src/theme";
  @include theme.default(true);

  .wrapper {
    width: 4rem;
    height: 4rem;
    transition: transform 300ms;

    &:hover {
      transform: scale(1.1);
    }
  }

  .wrapper :global(.switch) {
    cursor: pointer;
    width: 100%;
    min-height: 100%;
    display: grid;
    grid: 1fr/1fr;
    place-content: center;
  }
</style>