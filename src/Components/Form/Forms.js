import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/Posts";

function Forms() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [postDate, setPostDate] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postDate));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
        <Typography variant='h6'>Createing a Memory</Typography>
        <TextField
          name='Creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postDate.creator}
          onChange={(e) =>
            setPostDate({ ...postDate, creator: e.target.value })
          }
        />
        <TextField
          name='Title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postDate.title}
          onChange={(e) => setPostDate({ ...postDate, title: e.target.value })}
        />
        <TextField
          name='Message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postDate.message}
          onChange={(e) =>
            setPostDate({ ...postDate, message: e.target.value })
          }
        />
        <TextField
          name='Tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postDate.tags}
          onChange={(e) => setPostDate({ ...postDate, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostDate({ ...postDate, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth>
          Submit
        </Button>

        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth>
          clear
        </Button>
      </form>
    </Paper>
  );
}

export default Forms;
