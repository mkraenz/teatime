import { render } from '@testing-library/react-native';
import { FlatList } from 'react-native';
import List from './List';

describe('List', () => {
  it('should render successfully', () => {
    const { root, getByText } = render(
      <FlatList
        data={[{ a: 'hi' }, { a: 'hello' }]}
        renderItem={(props) => <List.Item title={props.item.a} />}
      />
    );
    expect(root).toBeVisible();
    expect(getByText('hi')).toBeVisible();
    expect(getByText('hello')).toBeVisible();
  });
});
