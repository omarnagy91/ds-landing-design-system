import { Button } from '~/button';

export const storyButton = () => Button;

export const storyButtonDisabled = () => ({
  Component: Button,
  props: {
    disabled: true,
  },
});

export const storyButtonPrimary = () => ({
  Component: Button,
  props: {
    primary: true,
  },
});
