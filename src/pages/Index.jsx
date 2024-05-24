import { useState } from "react";
import { Container, VStack, Text, Box, Heading, Button, IconButton, Avatar, Progress, HStack, StackDivider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, FormControl, FormLabel, Textarea, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { FaUser, FaCheckCircle, FaQuestionCircle, FaCode, FaRobot } from "react-icons/fa";

const HomeScreen = ({ onStartTest }) => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <HStack justifyContent="space-between">
          <Heading size="lg">SAP ABAP Academy</Heading>
          <IconButton aria-label="User Profile" icon={<FaUser />} size="lg" />
        </HStack>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Heading size="md">Upcoming Tests</Heading>
          <List spacing={3} mt={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              ABAP Basics - 2023-10-15
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Advanced ABAP - 2023-10-20
            </ListItem>
          </List>
        </Box>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Heading size="md">Completed Tests</Heading>
          <List spacing={3} mt={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              ABAP Syntax - Score: 85%
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Data Dictionary - Score: 90%
            </ListItem>
          </List>
        </Box>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Heading size="md">Progress Overview</Heading>
          <Progress value={70} size="lg" colorScheme="green" mt={3} />
        </Box>
        <Button colorScheme="teal" size="lg" onClick={onStartTest}>
          Start New Test
        </Button>
      </VStack>
    </Container>
  );
};

const TestScreen = ({ onSubmitTest }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    { question: "What is ABAP?", options: ["A programming language", "A database", "A framework", "An operating system"] },
    { question: "What does SAP stand for?", options: ["Systems, Applications, and Products", "Software and Applications", "Systematic Application Process", "None of the above"] },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg">Test</Heading>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="xl">{questions[currentQuestion].question}</Text>
          <VStack spacing={3} mt={3}>
            {questions[currentQuestion].options.map((option, index) => (
              <Button key={index} variant="outline" width="100%">
                {option}
              </Button>
            ))}
          </VStack>
        </Box>
        <HStack justifyContent="space-between" width="100%">
          <Button onClick={handlePrev} isDisabled={currentQuestion === 0}>
            Previous
          </Button>
          <Button onClick={handleNext} isDisabled={currentQuestion === questions.length - 1}>
            Next
          </Button>
        </HStack>
        <Button colorScheme="teal" size="lg" onClick={onSubmitTest}>
          Submit Test
        </Button>
      </VStack>
    </Container>
  );
};

const TestResults = ({ onRetakeTest }) => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg">Test Results</Heading>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="xl">Score: 80%</Text>
          <Divider my={4} />
          <Text>Explanation for incorrect answers:</Text>
          <List spacing={3} mt={3}>
            <ListItem>
              <ListIcon as={FaQuestionCircle} color="red.500" />
              What is ABAP? - Correct answer: A programming language
            </ListItem>
            <ListItem>
              <ListIcon as={FaQuestionCircle} color="red.500" />
              What does SAP stand for? - Correct answer: Systems, Applications, and Products
            </ListItem>
          </List>
        </Box>
        <Button colorScheme="teal" size="lg" onClick={onRetakeTest}>
          Retake Test
        </Button>
      </VStack>
    </Container>
  );
};

const UserProfile = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg">User Profile</Heading>
        <Box p={4} borderWidth={1} borderRadius="lg" textAlign="center">
          <Avatar size="xl" name="John Doe" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjUzODE5MXww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text fontSize="xl" mt={4}>
            John Doe
          </Text>
          <Text fontSize="md" color="gray.500">
            john.doe@example.com
          </Text>
        </Box>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Heading size="md">Progress Statistics</Heading>
          <Progress value={70} size="lg" colorScheme="green" mt={3} />
        </Box>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Heading size="md">Achievements</Heading>
          <List spacing={3} mt={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Completed ABAP Basics
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Scored 90% in Data Dictionary
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

const Chatbot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSend = () => {
    setResponses([...responses, { query, response: "This is a sample response from the chatbot." }]);
    setQuery("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg">Chatbot</Heading>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <VStack spacing={3} align="stretch">
            {responses.map((res, index) => (
              <Box key={index} p={3} borderWidth={1} borderRadius="lg">
                <Text fontWeight="bold">You:</Text>
                <Text>{res.query}</Text>
                <Divider my={2} />
                <Text fontWeight="bold">Chatbot:</Text>
                <Text>{res.response}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Button colorScheme="teal" size="lg" onClick={onOpen}>
          Ask a Question
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ask the Chatbot</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Question</FormLabel>
                <Textarea value={query} onChange={(e) => setQuery(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={handleSend}>
                Send
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
};

const Index = () => {
  const [screen, setScreen] = useState("home");

  const handleStartTest = () => setScreen("test");
  const handleSubmitTest = () => setScreen("results");
  const handleRetakeTest = () => setScreen("test");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {screen === "home" && <HomeScreen onStartTest={handleStartTest} />}
      {screen === "test" && <TestScreen onSubmitTest={handleSubmitTest} />}
      {screen === "results" && <TestResults onRetakeTest={handleRetakeTest} />}
    </Container>
  );
};

export default Index;
