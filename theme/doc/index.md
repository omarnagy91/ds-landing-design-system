# Theme

The `theme` package provides with a `@default` Sass mixin allowing
you to initialize all of the tokens as long as two themes variants:
`light` and `dark`.

## Setup

Add the SCSS `@use "@backlight-dev/divriots.starter-svelte/theme/src/theme";`
instruction in your SCSS file to load the mixin.

## Usage

Using a Sass mixin to declare the theme allow different use-cases:

- using the theme in a host app global stylesheet, defining all of
  the tokens once and letting the components and app parts refer to
  them ;
- using the theme embedded in a component, so the component is
  responsible of loading the tokens and use them to style itself
  without the need of an external global stylesheet.

### In a host app stylesheet

In your host app SCSS main stylesheet, just load the mixin at root
level:

```scss
@include 'theme.default';
```

### In a Svelte component

To _scope_ the theme at component level, pass the parameter `true`
to the mixin. It'll declare tokens at top level, and let the
component style itself using them.

```svelte
<style lang="scss">
  @use "~/theme/src/theme";
  @include theme.default(true);
</style>
```

_Note_: doing so means the component declares tokens at top-level,
even if they're already present, leading to redeclaring tokens each
time a component call the mixin. To avoid code duplication, you
_should_ use a postcss rule to clean the final host app stylesheet.

## Switching theme

Themes are scoped at node level using the `[color-scheme]`
attribute. To switch a theme, just add a
`[color-scheme="theme-name"]` attribute on any node to style it and
its children (usually on `<body>` node).

## Creating a theme variant

Themes files are located in the package
`@backlight-dev/divriots.starter-svelte/theme/src/_theme-name.scss`.

To create a new theme, add a new theme file following the existing format,
and include your new theme in the main
`@backlight-dev/divriots.starter-svelte/theme/src/_theme.scss`.
