```js script
import { Button } from '~/button';
```

# Button Component

The `Button` component is a simple component styled by your Design System.

## Setup

Import the Button Svelte component in your component `<script>` tag. You
can load it from the root package, or from the svelte file itself:

```svelte
<script>
import { Button } from '@backlight-dev/divriots.starter-svelte/button';
</script>
```

```svelte
<script>
import Button from '@backlight-dev/divriots.starter-svelte/button/src/Button.svelte';
</script>
```

## Usage

```js preview-story
export const storyButton = () => Button;
```

### `primary` variant

Adding the `primary` attribute to the button enables the _primary_ variant.
All other attributes are passed to the underlying html button element.

```js preview-story
export const storyButtonPrimary = () => ({
  Component: Button,
  props: {
    primary: true,
  },
});
```
