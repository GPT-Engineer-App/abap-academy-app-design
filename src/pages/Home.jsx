import { Box, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Home Page
      </Heading>
      <Text fontSize="lg">Welcome to the Home Page. This is styled according to Fiori design principles.</Text>
    </Box>
  );
}

export default Home;
