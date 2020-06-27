import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';
import { default as  NextLink } from 'next/Link'

import { useStyles } from './useStyles';
import { MobileMenu } from '../MobileMenu';
import { DesktopMenu } from '../DesktopMenu';

const LIST = [
  {
    title: 'Log In',
    href: '/login',
  },
  {
    title: 'Register',
    href: '/register',
  },
];

export const Header = () => {
  const classes = useStyles();
  const isUpToSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <NextLink href="/">
          <a className={classes.logo}>
            NextJs + Material-UI
          </a>
        </NextLink>

        {isUpToSm && <DesktopMenu list={LIST} />}

        {!isUpToSm && <MobileMenu list={LIST} />}
      </Toolbar>
    </AppBar>
  );
};
