import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

export const parameters = {
  controls: { expanded: true },
};
