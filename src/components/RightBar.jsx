import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import { itemData, friends, conversations } from "../../db";

function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" px={1}>
        <Typography variant="h6" fontWeight={100} my={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
          {friends.map((friend) => (
            <Avatar key={friend.id} alt={friend.name} src={friend.avatar} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest posts
        </Typography>
        <Box>
          <ImageList
            sx={{ width: 400, height: 215 }}
            cols={3}
            gap={5}
            rowHeight={104}
          >
            {itemData.map((data, index) => (
              <ImageListItem key={index}>
                <img src={data.img} alt={data.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {conversations.map((con, index) => (
            <Box key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={con.name} src={con.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={con.sent}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {con.receiver}
                      </Typography>
                      {con.message}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
