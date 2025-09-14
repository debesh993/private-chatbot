import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import {
  Home,
  Folder,
  History,
  Explore,
  Search,
  ChevronLeft,
  ChevronRight,
  Favorite
} from "@mui/icons-material";
import { useMessage } from "./MessageContext";


const Side_bar = () => {
const { messages } = useMessage();
  const chats = messages.map((msg) => msg.text);
  const [open, setOpen] = useState(true);

  return (
    <>
        {open && (
            <Box
              sx={{
                width: { xs: "70%", sm: "280px", md: "320px", lg: "22%" },
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRight: "1px solid #e0e0e0",
                p: 2,
                bgcolor: "white",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 0,
                  bgcolor: "white",
                  border: "1px solid #ddd",
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                <ChevronLeft />
              </IconButton>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ mb: 2, color: "#2a2aee" }}
                >
                  Inteliq
                </Typography>

                <TextField
                  placeholder="Search for chats..."
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2, bgcolor: "#f5f5f5ff", borderRadius: "16px" }}
                />
                <List>
                  <ListItemButton>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    <Typography variant="body2" color="text.secondary">
                      ⌘H
                    </Typography>
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemIcon>
                      <Folder />
                    </ListItemIcon>
                    <ListItemText primary="Library" />
                    <Typography variant="body2" color="text.secondary">
                      ⌘T
                    </Typography>
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemIcon>
                      <History />
                    </ListItemIcon>
                    <ListItemText primary="History" />
                    <Typography variant="body2" color="text.secondary">
                      ⌘G
                    </Typography>
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemIcon>
                      <Explore />
                    </ListItemIcon>
                    <ListItemText primary="Explore" />
                    <Typography variant="body2" color="text.secondary">
                      ⌘L
                    </Typography>
                  </ListItemButton>
                </List>
                <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
                  Recent Chats
                </Typography>
                <List sx={{
                  maxHeight: {
                    xs: "20dvh",
                    sm: "28dvh",
                    md: "26dvh",
                    lg: "26dvh",
                  }, overflowY: "auto"
                }}>
                  {chats.map((chat, index) => (
                    <ListItemButton key={index} sx={{ borderRadius: 2 }} >
                      <ListItemText
                        primaryTypographyProps={{ noWrap: true, fontSize: 14 }}
                      >
                        {chat}
                      </ListItemText>
                    </ListItemButton>
                  ))}
                </List>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "primary.main", cursor: "pointer" }}
                >
                  View All +
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2, borderRadius: 2, justifyContent: "flex-start" }}
                >
                  Try Pro!
                </Button>
                <Divider sx={{ mb: 2 }} />
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src="https://i.pravatar.cc/40" />
                  <Typography>Lawrence Cruz</Typography>
                </Box>
              </Box>
            </Box>
          )}
          {!open && (
            <Box
              sx={{
                width: { xs: "48px", sm: "56px", md: "70px" },
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                borderRight: "1px solid #e0e0e0",
                bgcolor: "white",
                py: 1,
              }}
            >

              <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: 1, mt: 1 }}>
                <IconButton
                  onClick={() => setOpen(true)}
                  sx={{
                    width: { xs: 32, sm: 50, md: 40 },
                    height: { xs: 32, sm: 36, md: 40 },
                    bgcolor: "white",
                    border: "1px solid #ddd",
                    "&:hover": { bgcolor: "#f5f5f5" },
                  }}
                >
                  <ChevronRight />
                </IconButton>
                <IconButton><Search /></IconButton>
                <IconButton><Home /></IconButton>
                <IconButton><Folder /></IconButton>
                <IconButton><History /></IconButton>
                <IconButton><Explore /></IconButton>
                <IconButton><Favorite /></IconButton>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, mb: 1 }}>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: "auto",
                    borderRadius: 3,
                    px: { xs: 0.5, sm: 1 },
                    py: 0,
                    fontSize: { xs: "0.55rem", sm: "0.65rem" },
                    textTransform: "none",
                    lineHeight: 1.2,
                  }}
                >
                  Try Pro!
                </Button>

                <Avatar src="https://i.pravatar.cc/40"
                  sx={{
                    width: { xs: 28, sm: 32, md: 36 },
                    height: { xs: 28, sm: 32, md: 36 },
                  }} />
              </Box>
            </Box>
          )}
    </>

  );
}
export default Side_bar;
