import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '@divriots/dockit-core/style.css';
import '~/dockit/src/_dockit.scss';

import logoSVG from '~/dockit/src/logo.svg?raw';

export default {
  layout: (content, context) => html`
    <style>
      ${unsafeHTML(styles)}
    </style>
    <dockit-layout
      .context="${context}"
      @color-scheme-change="${({ detail: { colorScheme } }) => {
        document.documentElement.classList.toggle(
          'dark',
          colorScheme === 'dark'
        );
      }}"
    >
      <div slot="logo">${unsafeHTML(logoSVG)}</div>
      <div class="prose dark:prose-invert">${unsafeHTML(content)}</div>
    </dockit-layout>
  `,
};
