```js script
import { ThemeSwitch } from '~/theme-switch';
```

# Theme Switch

The `ThemeSwitch` component is a combination of `Button` and `Icon`
components. It displays a button Theme Switcher (light/dark modes),
adaptative and contextual to the user-agent settings.

## Setup

Import the ThemeSwitch Svelte component in your component `<script>` tag.
You can load it from the root package, or from the svelte file itself:

```svelte
<script>
import { ThemeSwitch } from '@backlight-dev/divriots.starter-svelte/theme-switch';
</script>
```

```svelte
<script>
import ThemeSwitch from '@backlight-dev/divriots.starter-svelte/button/src/ThemeSwitch.svelte';
</script>
```

## Usage

```js preview-story
export const storySwitchTheme = () => ThemeSwitch;
```
