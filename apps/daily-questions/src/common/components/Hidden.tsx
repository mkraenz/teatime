import { FC, PropsWithChildren } from 'react';
type Props = PropsWithChildren & { hidden: boolean };

export const Hidden: FC<Props> = ({ hidden, children }) =>
  hidden ? null : children;

export default Hidden;
