import React, { useState, useRef, useCallback } from "react";
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SendIcon from "@mui/icons-material/Send";
import { useMessage } from "./MessageContext";

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const { onQuestionClick } = useMessage();

  const handleSend = () => {
  if (!message.trim() && attachments.length === 0) return;
  onQuestionClick(message.trim()); 
  setMessage("");
  setAttachments([]);
};

  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAttachments((prev) => [...prev, ...Array.from(event.target.files!)]);
    }
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setAttachments((prev) => [...prev, ...Array.from(event.dataTransfer.files)]);
    }
  }, []);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    if (event.clipboardData.files.length > 0) {
      setAttachments((prev) => [...prev, ...Array.from(event.clipboardData.files)]);
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearAttachments = () => {
    setAttachments([]);
  };
  


  return (
    <Paper
      elevation={1}
      sx={{
        p: { xs: 1, sm: 2, md: 2 }, 
        borderRadius: { xs: "12px", sm: "16px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 0.5, sm: 1 },
        width: "100%",
      }}

      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onPaste={handlePaste}
    >
      <TextField
        placeholder="Ask me a question..."
        variant="outlined"
        multiline
        maxRows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        InputProps={{
          sx: {
            borderRadius: { xs: "10px", sm: "12px" },
            backgroundColor: "#fff",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            p: { xs: 1, sm: 1.5 },
          },
        }}

      />

      {attachments.length > 0 && (
        <Box>
          <List dense>
            {attachments.map((file, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    color="error"
                    onClick={() => handleRemoveAttachment(index)}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={file.name}
                  primaryTypographyProps={{
                    sx: { fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" } },
                  }}
                />

              </ListItem>
            ))}
          </List>
          <IconButton onClick={handleClearAttachments} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 0.5, sm: 1 },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <Box>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <IconButton sx={{ p: { xs: 0.5, sm: 1 } }} onClick={() => fileInputRef.current?.click()}>
            <AttachFileIcon sx={{ fontSize: { xs: 18, sm: 22, md: 24 } }} />
          </IconButton>
          <IconButton sx={{ p: { xs: 0.5, sm: 1 } }}>
            <CameraAltIcon sx={{ fontSize: { xs: 18, sm: 22, md: 24 } }} />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            sx={{ fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" }, color: "text.secondary" }}
          >
            {message.length}/1000
          </Typography>
          <IconButton
            color="primary"
            disabled={!message && attachments.length === 0}
            onClick={handleSend}
            sx={{ p: { xs: 0.5, sm: 1 } }}
          >
            <SendIcon sx={{ fontSize: { xs: 18, sm: 22, md: 24 } }} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatInput;
