import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from './styles';
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
    const posts = useSelector((state)=> state.Posts);
    const classes = useStyles();

    console.log(posts);
    return(
       !posts.length ? <CircularProgress/> :(
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post)=>(
            <Grid key={post.id} item xs={12} sm={6}>
                <Post post={post} />
            </Grid>
          ))}
        </Grid>
       )
    );
}

export default Posts;