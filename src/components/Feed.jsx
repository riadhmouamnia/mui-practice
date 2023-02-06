import { Avatar, Box, TextField } from "@mui/material";
import React from "react";
import { Posts } from "../../db";
import AddPost from "./AddPost";
import FeedCard from "./FeedCard";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <AddPost />
      {Posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </Box>
  );
}

export default Feed;
