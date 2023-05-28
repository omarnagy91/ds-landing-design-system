```js script
import './doc.css';
import { Icon } from '~/icon';
```

# Icon Component

The `Icon` component displays an icon styled by your Design System. The
icon is loaded from `api.iconify.design`. You can use [icones.js.org](https://icones.js.org/)
to browse the available icons.

## Setup

Import the Icon Svelte component in your component `<script>` tag. You
can load it from the root package, or from the svelte file itself:

```svelte
<script>
import { Icon } from '@backlight-dev/divriots.starter-svelte/icon';
</script>
```

```svelte
<script>
import Icon from '@backlight-dev/divriots.starter-svelte/button/src/Icon.svelte';
</script>
```

## Usage

Pass the name of the selected icon (e.g. `bi:alarm`) as an `icon` prop.

_Note_: By default, your icons comes with a `null` size, and uses its wrapper to
set its own size. You _must_ declares in your stylesheet the dimensions
of your icon.

```js preview-story
export const storyIcon = () => ({
  Component: Icon,
  props: {
    icon: 'bi:alarm',
  },
});
```
