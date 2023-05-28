```js script
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './doc.scss';
```

# Opacity

## Tokens

Opacity tokens are declared in the `_opacity.scss@tokens` Sass mixin,
ready to be embedded in your favorite selector:

```scss
@use '@backlight-dev/divriots.starter-svelte/opacity/src/_opacity.scss';

:where(html) {
  @include opacity.tokens;
}
```

## Transparency

<dockit-css-showcases checkered-background css-props-prefix="--opacity" component-class="box" style-key="opacity"></dockit-css-showcases>
