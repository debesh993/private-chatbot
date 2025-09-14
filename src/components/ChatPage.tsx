import { Box } from "@mui/material";
import ChatWindow from "./Chatwindow_middle";
import ChatInput from "./ChatInput";
import LearnCards from "./LearnCards";
import { useMessage } from "./MessageContext"; 




const ChatPage = () => {
    const { messages } = useMessage();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            {messages.length === 0 && <LearnCards />}
            {messages.length > 0 && <ChatWindow />}
            <ChatInput />

        </Box>
    );
};

export default ChatPage;
