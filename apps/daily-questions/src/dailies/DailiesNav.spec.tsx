import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { RootState } from '../store';
import { renderWithProviders } from '../test-utils/render-with-providers';
import DailiesNav from './DailiesNav';

beforeEach(() => {
  jest.useFakeTimers();
});

const preloadedState: Partial<RootState> = {
  questions: {
    questions: [
      {
        id: 'id-points',
        type: 'points',
        active: true,
        questionLong: 'How would you score the app?',
        title: 'Points',
      },
      {
        id: 'id-1-fulltext',
        type: 'fulltext',
        active: true,
        questionLong: 'What is your name?',
        title: 'Name',
      },
    ],
  },
};

it('renders something', async () => {
  const { getByTestId, findByText, findByRole } = renderWithProviders(
    <DailiesNav />,
    { preloadedState }
  );
  const pointsLabel = await findByRole('heading');
  expect(pointsLabel).toHaveTextContent('Points');
  expect(getByTestId('points-input')).toBeDefined();

  fireEvent.changeText(getByTestId('points-input'), '6');

  const changedInput = await findByText('6');
  expect(changedInput).toHaveTextContent('6');
});

it('auto-navigates to the next question on valid input', async () => {
  const { getByTestId, findByRole } = renderWithProviders(<DailiesNav />, {
    preloadedState,
  });

  fireEvent.changeText(getByTestId('points-input'), '6');

  const nameLabel = await findByRole('heading');
  expect(nameLabel).toHaveTextContent('Name');
  expect(getByTestId('fulltext-input')).toBeVisible();
});
