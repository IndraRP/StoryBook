import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Alert } from "./allert";
import { AlertProps } from './allert.types';
import { Button } from "../Button/button";

const meta = {
  title: "Molecule/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },


  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Alert>;


export default meta;
type Story = StoryObj<typeof meta>;



export const custom: StoryObj<AlertProps> = (args: React.JSX.IntrinsicAttributes & AlertProps) => (
  <Alert {...args}>
       <Button label="Label" />
  </Alert>
);

custom.args = {
    variant: "primary",
    label:
      "Hallooo ini projek storybook pertama saya",
    title: "Lorem Ipsum",

};


export const Primary: Story = {
  args: {
    variant: "primary",
    label:
      "Hallooo ini projek storybook pertama saya",
    title: "Lorem Ipsum",
  },
};

export const Contoh: Story = {
  args: {
    variant: "primary",
    label:
      "Hallooo ini projek storybook pertama saya",
    title: "Lorem Ipsum",
  },
};


export const SemogaPaham: Story = {
  args: {
    variant: "primary",
    label:
      "Hallooo ini projek storybook pertama saya dan Semoga saya PAHAM",
    title: "Lorem Ipsum",
  },
};


export const Success: Story = {
  args: {
    variant: "success",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit? Allert",
    title: "Lorem Ipsum",
  },
};







export const Warning: Story = {
  args: {
    variant: "warning",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab ipsa recusandae?",
    title: "Lorem Ipsum",
  },
};




export const Danger: Story = {
  args: {
    variant: "danger",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab ipsa recusandae?",
    title: "Lorem Ipsum",
  },
};