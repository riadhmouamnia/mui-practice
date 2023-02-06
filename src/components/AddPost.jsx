import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import PublicIcon from "@mui/icons-material/Public";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 600 },
  //   height: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function AddPost({ open, setOpen }) {
  return (
    <Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box color={"text.primary"} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a post
          </Typography>
          <Box mt={2}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/85134557?v=4"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h7">Remy Sharp </Typography>
                <PublicIcon fontSize="small" />
              </Box>
            </Box>
            {/* <Divider variant="inset" /> */}
            <TextField
              sx={{ width: "100%", mb: 2 }}
              id="standard-multiline-flexible"
              variant="standard"
              placeholder="What do you wanna talk about?"
              multiline
              rows={5}
            />
            <AddReactionIcon />
            <Box mt={4} display="flex" justifyContent="space-between">
              <Box display="flex" gap={2}>
                <InsertPhotoIcon fontSize="large" color="primary" />
                <SmartDisplayIcon fontSize="large" color="secondary" />
                <TextSnippetIcon fontSize="large" />
                <MoreHorizIcon fontSize="large" />
              </Box>
              <Button>Post</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default AddPost;
