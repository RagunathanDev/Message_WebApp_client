import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Forms";
import memories from "./Images/memories.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { getPost } from "./actions/Posts";

const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2'>Memories</Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
