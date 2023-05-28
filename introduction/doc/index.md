# Svelte Starter Kit

This Starter Kit contains a simple Svelte-based Design System sample for your
projects.

## Architecture

This starter kit contains two kinds of packages:

- _Tokens_: containing the deisgn tokens definitions in a shape of Sass mixins
  - `colors`: the overall palette
  - `rounded`: radii
  - `borders`: borders related tokens
  - `spacing`: margins and paddings
  - `opacity`: transparencies
  - plus a special `theme` package to setup your host app in a single line
- _Components_: containing Svelte components ready to be used in your host app

You'll also find a `dockit` package, relative to the internal documentation.

## Usage

To use this Design System in your Svelte-based host app, you can rely on the
Backlight CLI to link it:

1. In your Svelte app, run the `npx backlight link …` command (you can find
   it by clicking the top-right antenna button next to your avatar) or install
   the `@backlight-dev/divriots.starter-svelte` package
2. In your project, import components from the Design System dependency and
   use it as any regular Svelte component:

   ```
   <script>
   import { ThemeSwitch } from '@backlight-dev/divriots.starter-svelte/theme-switch';
   </script>

   <ThemeSwitch />
   ```

All components come with their styles built-in, based on the design tokens.
