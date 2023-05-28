import './styles.scss';
import { Icon } from '~/icon';
import IconWithText from './IconWithText.svelte';

export const storyIcon = () => ({
  Component: Icon,
  props: {
    icon: 'ph:moon-fill',
  },
});

export const storyIconWithSlot = () => IconWithText;
