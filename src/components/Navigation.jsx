import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal">
          Welcome
        </Button>
        <Button as={Link} to="/home" colorScheme="teal">
          Home
        </Button>
        <Button as={Link} to="/profile" colorScheme="teal">
          Profile
        </Button>
        <Button as={Link} to="/chatbot" colorScheme="teal">
          Chatbot
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
