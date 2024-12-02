import { FC, PropsWithChildren } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';

const mapState = (state: RootState) => ({
  dev: state.settings.devMode,
});
const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsWithChildren & PropsFromRedux;

const HiddenFromNonDevMode: FC<Props> = ({ dev, children }) => {
  if (dev) {
    return children;
  }
  return null;
};

export default connector(HiddenFromNonDevMode);
