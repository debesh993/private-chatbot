import React from "react";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChatIcon from "@mui/icons-material/Chat";


const Side_bar1 = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />}
        startIcon={<ChatIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />}
        sx={{
          borderRadius: { xs: "8px", sm: "10px" },
          textTransform: "none",
          fontWeight: 500,
          fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" }, 
          padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" }, 
          backgroundColor: "#f9f9fb",
          "&:hover": { backgroundColor: "#f1f1f5" },
        }}

      >
        ChatGPT 4
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}>ChatGPT 3.5</MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}>ChatGPT 4</MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}>ChatGPT 4 Turbo</MenuItem>
      </Menu>
    </Box>
  );
}
export default Side_bar1;