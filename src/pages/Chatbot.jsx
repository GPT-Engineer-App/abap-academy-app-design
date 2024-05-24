import { Box, Heading, VStack, Textarea, Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

function Chatbot() {
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);

  const handleSend = () => {
    if (input.trim()) {
      setQuestions([...questions, input]);
      setInput("");
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        ChatBot - Ask Anything from ABAP
      </Heading>
      <VStack spacing={4} mt={6}>
        <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." />
        <Button colorScheme="teal" onClick={handleSend}>
          Send
        </Button>
        <VStack spacing={2} align="start">
          {questions.map((question, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px">
              {question}
            </Box>
          ))}
        </VStack>
        <HStack spacing={2} mt={4}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Text key={star} cursor="pointer" color={star <= rating ? "yellow.400" : "gray.300"} onClick={() => handleRating(star)}>
              ★
            </Text>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}

export default Chatbot;
