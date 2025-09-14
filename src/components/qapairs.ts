export interface QAPair {
  question: string;
  answer: string;
}

export const qaPairs: QAPair[] = [
  {
    question: "hi",
    answer: "Hi! How are you?",
  },
  {
    question: "what is your name",
    answer: "I am ChatBot, your virtual assistant.",
  },
  {
    question: "how are you",
    answer: "I'm just a program, but I'm functioning perfectly! 😄",
  },

  // From your LearnCards
  {
    question: "give me a concise summary of this meeting transcript",
    answer: "Here’s a concise summary of the meeting: [Insert summary here].",
  },
  {
    question: "write a product description for a minimalist smartwatch",
    answer: "This minimalist smartwatch features a sleek design, intuitive interface, and long battery life, perfect for everyday wear.",
  },
  {
    question: "provide a polite response to a customer asking for a refund",
    answer: "We’re sorry for the inconvenience. We’d be happy to process your refund. Please provide your order details.",
  },
];

