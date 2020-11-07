import { Meta } from '@storybook/react';

import Main, { MainProps } from '.';

export default {
  title: 'Main Component',
  component: Main,
  args: {
    description: 'Descrição de teste',
  },
  argTypes: {
    description: {
      control: {
        type: 'text',
      },
    },
    background: {
      control: {
        type: 'color',
      },
    },
  },
} as Meta;

export const Basic = (args: MainProps) => <Main {...args} />;
