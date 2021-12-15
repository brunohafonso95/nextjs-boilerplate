import { ArgTypes, Meta, Story } from '@storybook/react';

import Main from '.';
import { MainProps } from './interfaces';

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'title',
      type: 'string',
      description: 'the title text of the component',
    },
  } as ArgTypes<MainProps>,
} as Meta;

export const Basic: Story<MainProps> = (args) => <Main {...args} />;
Basic.args = {
  title: 'NextJS Boilerplate',
} as MainProps;
