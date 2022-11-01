// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Button',
  component: Button,
  argTypes: {
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description: 'Kiểu của button, thường thì sẽ chỉ dùng để xác định màu',
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    icon: {

    }
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Tertiary = Template.bind({});
Tertiary.args = {};
