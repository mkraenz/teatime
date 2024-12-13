import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
// import { PaperProvider, Text } from '@teatime/rnp-components';
import { Text } from 'react-native';

const XComp = () => <Text>hi</Text>;

const meta: Meta<typeof XComp> = {
  component: XComp,
  title: 'XComp',
};
export default meta;
type Story = StoryObj<typeof XComp>;

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
