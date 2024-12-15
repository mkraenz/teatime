import { render } from '@testing-library/react-native';
import { Button, PaperProvider } from 'react-native-paper';
import { Menu } from './Menu';

describe('Menu', () => {
  it('should render successfully', () => {
    const { root, getByText } = render(
      <PaperProvider>
        <Menu visible anchor={<Button>Some Button</Button>}>
          <Menu.Item title={'Item 1'} />
          <Menu.Item title={'Item 2'} />
        </Menu>
      </PaperProvider>
    );
    expect(root).toBeVisible();
    expect(getByText('Some Button')).toBeVisible();
    expect(getByText('Item 1')).toBeOnTheScreen();
    expect(getByText('Item 1')).toBeOnTheScreen();
    expect(getByText('Item 2')).not.toBeVisible();
    expect(getByText('Item 2')).not.toBeVisible();
  });
});
