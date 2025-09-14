import React, { createContext, useContext, useState } from "react";
import { qaPairs } from "./qapairs";

export type Message = {
  sender: "user" | "bot";
  text: string;
};

type UserContextType = {
  messages: Message[];
  onNewChat: () => void;
  onQuestionClick: (question: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useMessage = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useMessage must be used within MessageProvider");
  return ctx;
};

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const onNewChat = () => setMessages([]);

  const onQuestionClick = (question: string) => {
    const userMessage: Message = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);

    const found = qaPairs.find((qa) => qa.question.toLowerCase() === question.toLowerCase());
    const botMessage: Message = {
      sender: "bot",
      text: found ? found.answer : "I cannot find an answer.",
    };

    setTimeout(() => setMessages((prev) => [...prev, botMessage]), 500);
  };

  return (
    <UserContext.Provider value={{ messages, onNewChat, onQuestionClick }}>
      {children}
    </UserContext.Provider>
  );
};
