import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/AutoAwesome";
import { useMessage } from "./MessageContext";

const LearnCards: React.FC = () => {
const { onQuestionClick } = useMessage();
  return (
    <Box sx={{
      p: 3,  width: "100%",overflowY:"auto", height: {
        xs: "464px", 
        sm: "650px", 
        md: "406px", 
        lg: "406px",
      },
    }}>
      <Typography
        sx={{
          display: "flex", flexWrap: "wrap", alignItems: "center", fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          mb: 1,
        }}
      >
        👋 Hi Laurence!
      </Typography>

      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "2.1rem" },
          mb: { xs: 2, sm: 3, md: 4 },

        }}
      >
        What do you want to learn today?
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }
        }}
      >

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            background: "linear-gradient(135deg, #f9f9ff, #fdfdff)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
          onClick={() => onQuestionClick("Give me a concise summary of this meeting transcript")}
        >
          <CardContent>
            <StarIcon
              sx={{
                color: "#8ab4f8",
                mb: { xs: 2, sm: 3, md: 6 },
                fontSize: { xs: 20, sm: 25, md: 30 },
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem", md: "1rem" },
              }}
            >

              Give me a concise summary of this meeting transcript
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            background: "linear-gradient(135deg, #fafaff, #fefcff)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
          onClick={() => onQuestionClick("Write a product description for a minimalist smartwatch")}
        >
          <CardContent>
            <StarIcon
              sx={{
                color: "#8ab4f8",
                mb: { xs: 2, sm: 3, md: 6 },
                fontSize: { xs: 20, sm: 25, md: 30 },
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
              }}
            >

              Write a product description for a minimalist smartwatch
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            background: "linear-gradient(135deg, #fdfdff, #fafaff)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
          onClick={() => onQuestionClick("Provide a polite response to a customer asking for a refund")}
        >
          <CardContent>
            <StarIcon
              sx={{
                color: "#8ab4f8",
                mb: { xs: 2, sm: 3, md: 6 },
                fontSize: { xs: 20, sm: 25, md: 30 },
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Provide a polite response to a customer asking for a refund
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default LearnCards;
