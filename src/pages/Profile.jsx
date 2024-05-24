import { Box, Button, Heading, VStack } from "@chakra-ui/react";

function Profile() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Student Profile
      </Heading>
      <VStack spacing={4} mt={6}>
        <Button colorScheme="teal">Tests ABAP</Button>
        <Button colorScheme="teal">ChatBot - Ask Anything from ABAP</Button>
        <Button colorScheme="teal">Code Generator (Basic and Master Plan)</Button>
        <Button colorScheme="teal">Tutorials</Button>
      </VStack>
    </Box>
  );
}

export default Profile;
