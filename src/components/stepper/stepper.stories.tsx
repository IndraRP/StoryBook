import { Stepper, StepperProps } from './stepper';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
    title: 'Atoms/Stepper',
    component: Stepper,
    argTypes: {
        variant: { control: 'select' }
    }
} as Meta;

// With named export we define component's story
export const Default: StoryObj<StepperProps> = (args: React.JSX.IntrinsicAttributes & StepperProps) => <Stepper {...args} />;
// Define default arguments for the Default StoryObj
Default.args = {
    variant: 'elevation',
};

// Second StoryObj
export const WithText: StoryObj<StepperProps> = (args: React.JSX.IntrinsicAttributes & StepperProps) => (
    <Stepper {...args}>
        <div>
            <span>/</span>
        </div>
    </Stepper>
);
// Define default arguments for the WithText component and inherit arguments from Default component
WithText.args = {
    ...Default.args,
};
