```js script
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './doc.scss';
```

# Borders

## Tokens

Borders tokens are declared in the `_borders.scss@tokens` Sass mixin,
ready to be embedded in your favorite selector:

```scss
@use '@backlight-dev/divriots.starter-svelte/borders/src/_borders.scss';

:where(html) {
  @include borders.tokens;
}
```

## Borders Width

<dockit-css-showcases css-props-prefix="--border" mode="scale"></dockit-css-showcases>
