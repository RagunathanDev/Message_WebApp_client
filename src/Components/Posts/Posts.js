import React from "react";
import useStyles from "./styles";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

function Posts() {
  const posts = useSelector((state) => state.Posts);

  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      classNAme={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
