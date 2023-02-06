import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import RightBar from "./components/RightBar";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Nav />
        <Stack direction="row" justifyContent="space-between">
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
