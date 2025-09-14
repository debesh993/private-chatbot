import { Box, IconButton, Button, Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./MessageContext";


export default function NewChatButton() {
  const navigate=useNavigate();
const { onNewChat } = useMessage();
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Tooltip title="Share">
        <IconButton sx={{ p: { xs: 0.5, sm: 0.75, md: 1 } }}>
          <ShareIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Help">
        <IconButton sx={{ p: { xs: 0.5, sm: 0.75, md: 1 } }}>
          <HelpOutlineIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
        </IconButton>
      </Tooltip>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onNewChat}
        sx={{
          borderRadius: { xs: "16px", sm: "20px" }, 
          textTransform: "none",
          fontWeight: 500,
          fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" }, 
          backgroundColor: "#0b65f0",
          "&:hover": { backgroundColor: "#0856c7" },
          px: { xs: 1.5, sm: 2.5 },
          py: { xs: 0.5, sm: 1 },
        }}

      >
        New Chat
      </Button>
    </Box>
  );
}
