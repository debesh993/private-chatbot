import { Box, Typography, Paper } from "@mui/material";
import { useMessage } from "./MessageContext";

const Chatwindow_middle: React.FC = () => {
const { messages } = useMessage();
    return (
        <Box
            sx={{
                overflow: "auto",
                p: { xs: 1, sm: 2, md: 3 },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, sm: 1.5 },
                height: {
                    xs: "464px", 
                    sm: "650px",
                    md: "478px", 
                    lg: "478px", 
                },
            }}
        >
            {messages.map((msg, index) => (
                <Box
                    key={index}
                    display="flex"
                    justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"}
                >
                    <Paper
                        sx={{
                            px: { xs: 1.5, sm: 2 },
                            py: { xs: 1, sm: 1.2 },
                            borderRadius: "16px",
                            maxWidth: "75%",
                            bgcolor: msg.sender === "user" ? "#0b65f0" : "grey.200",
                            color: msg.sender === "user" ? "white" : "black",
                            fontSize: { xs: "0.8rem", sm: "0.9rem" },
                            wordBreak: "break-word",
                        }}
                    >
                        <Typography>{msg.text}</Typography>
                    </Paper>
                </Box>
            ))}
        </Box>
    );
};

export default Chatwindow_middle;
