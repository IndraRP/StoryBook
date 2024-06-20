import React, { useState, ChangeEvent } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './input'; // Pastikan menggunakan huruf besar 'I' sesuai nama file

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: { control: 'boolean' },
    type: {
      control: {
        type: 'radio',
        options: ['Text', 'Number', 'Password'],
      },
    },
    onChange: { action: 'changed' },
  },
} as Meta;



interface InputStoryProps {
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type: 'text' | 'number' | 'secret';
}

const Template: StoryFn<InputStoryProps> = (args: InputStoryProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Text = Template.bind({});
Text.args = {
  placeholder: 'Input text...',
  size: 'medium',
  disabled: false,
  type: 'text',
};

export const Number = Template.bind({});
Number.args = {
  placeholder: 'Input number...',
  size: 'medium',
  disabled: false,
  type: 'number',
};

export const Secret = Template.bind({});
Secret.args = {
  placeholder: 'Password...',
  size: 'medium',
  disabled: false,
  type: 'secret',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Cannot type here...',
  size: 'medium',
  disabled: true,
  type: 'text',
};