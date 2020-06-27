import React from 'react';
import { Button } from '@material-ui/core';

import { default as NextLink } from 'next/Link';

export const DesktopMenu = ({ list }) => {
  return (
    <div>
      {list.map(item => (
        <NextLink key={item.title} href={item.href}>
          <Button component="a" color="inherit">{item.title}</Button>
        </NextLink>
      ))}
    </div>
  );
};
