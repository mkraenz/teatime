import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { MD3LightTheme, PaperProvider, Text } from 'react-native-paper';

const MyComponent = () => (
  <PaperProvider theme={MD3LightTheme}>
    <Text>Hi</Text>
  </PaperProvider>
);

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  title: 'Example',
};
export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/hi/gi)).toBeTruthy();
  },
};
