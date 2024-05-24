import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Welcome to Our Platform
      </Heading>
      <VStack spacing={4} mt={6}>
        <Button colorScheme="teal" onClick={() => navigate("/profile")}>
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Index;
