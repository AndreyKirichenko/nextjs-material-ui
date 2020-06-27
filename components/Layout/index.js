import { useStyles } from './useStyles';

import { Header } from '../Header';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />

      <main className={classes.main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
