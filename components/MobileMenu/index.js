import React, { useState }  from 'react';
import { Box, Button, Drawer, List, ListItem, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { default as NextLink } from 'next/Link';

const useStyles = makeStyles({
  list: {
    width: '100vw',
  },
  listItem: {
    justifyContent: 'center',
  },
});

export const MobileMenu = ({ list }) => {
  const classes = useStyles();

  const [ isOpenDrawer, setDrawer ] = useState(false);

  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(!isOpenDrawer);
  };

  const renderDrawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List autoFocus className={classes.list}>
        {list.map(item => (
          <ListItem key={item.title} className={classes.listItem}>
            <NextLink href={item.href}>
              <Button component="a" color="inherit">{item.title}</Button>
            </NextLink>
          </ListItem>
        ))}
      </List>  
    </div>
  );

  return (
    <>
      <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpenDrawer}
        onClose={toggleDrawer}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {renderDrawerList('left')}
      </Drawer>
    </>
  );
};
