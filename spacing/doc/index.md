```js script
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './doc.scss';
```

# Spacing

## Tokens

Spacing tokens are declared in the `_spacing.scss@tokens` Sass mixin,
ready to be embedded in your favorite selector:

```scss
@use '@backlight-dev/divriots.starter-svelte/spacing/src/_spacing.scss';

:where(html) {
  @include spacing.tokens;
}
```

## Spacings

<dockit-css-showcases css-props-prefix="--spacing" mode="scale"></dockit-css-showcases>
