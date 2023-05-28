```js script
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './doc.scss';
```

# Rounded: `border-radius`

## Tokens

Rounded tokens are declared in the `_rounded.scss@tokens` Sass mixin,
ready to be embedded in your favorite selector:

```scss
@use '@backlight-dev/divriots.starter-svelte/rounded/src/_rounded.scss';

:where(html) {
  @include rounded.tokens;
}
```

## Radii

<dockit-css-showcases css-props-prefix="--rounded" component-class="box wide" style-key="border-radius"></dockit-css-showcases>
