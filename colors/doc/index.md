```js script
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './doc.scss';
```

# Colors

## Tokens

Colors tokens are declared in the `_colors.scss@tokens` Sass mixin,
ready to be embedded in your favorite selector:

```scss
@use '@backlight-dev/divriots.starter-svelte/colors/src/_colors.scss';

:where(html) {
  @include colors.tokens;
}
```

## Palette

<dockit-css-showcases checkered-background css-props-prefix="--palette" component-class="box" style-key="background-color"></dockit-css-showcases>
