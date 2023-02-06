import { Avatar, Box, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Posts } from "../../db";
import AddPost from "./AddPost";
import FeedCard from "./FeedCard";

function Feed() {
  const [open, setOpen] = useState(false);
  const toggleModel = () => {
    setOpen(!open);
  };
  return (
    <Box flex={4} p={2}>
      <Tooltip
        title="Add post"
        sx={{ postion: "fixed", bottom: 20, left: 30 }}
        onClick={toggleModel}
      >
        <Box
          display="flex"
          gap={2}
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/85134557?v=4"
          />
          <TextField
            sx={{ width: "80%" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Start a post"
            variant="filled"
          />
        </Box>
      </Tooltip>
      <AddPost open={open} setOpen={setOpen} />
      {Posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </Box>
  );
}

export default Feed;
