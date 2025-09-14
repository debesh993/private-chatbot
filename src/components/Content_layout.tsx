import { Box } from "@mui/material";
import Side_bar from "./Side_bar";
import Side_bar1 from "./Side_bar1";
import NewChatButton from "./NewChatButton";
import { Outlet } from "react-router-dom";

const Content_layout = () => {
    return (
        <>
            <Box sx={{ display: "flex", width: "100%", height: "100%",boxSizing:"border-box" }}>
                <Side_bar />
                <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
                    <Box sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        px: { xs: 1, sm: 2, md: 4 },
                        flexShrink: 1, minWidth:0,
                        flexWrap:"nowrap",
                        overflow: "hidden"
                    }}>
                        <Box
                            sx={{ display: "flex", flexShrink: 1, minWidth:0, justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e0e0e0", whiteSpace: "nowrap", overflow: "hidden" }}>
                            <Side_bar1 />
                            <NewChatButton />
                        </Box>
                        <Outlet/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Content_layout;