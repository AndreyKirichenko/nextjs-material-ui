import { Container, Typography } from '@material-ui/core';
import { useStyles } from './useStyles'

export const SectionWelcome = ({}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography
        variant="h2"
        component="h1"
        className={classes.title}
      >
        This is Next.js with Material-UI start kit.
      </Typography>
    </Container>
  );
}

SectionWelcome.propTypes = {};
