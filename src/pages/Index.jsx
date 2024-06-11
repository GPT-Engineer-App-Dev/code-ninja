import { Box, Container, Flex, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" p={0}>
      <Flex direction="column" height="100%">
        {/* Navbar */}
        <Box bg="gray.700" color="white" p={4}>
          <Text fontSize="xl">Navbar</Text>
        </Box>

        <Flex flex="1" overflow="hidden">
          {/* Chat Section */}
          <Box bg="gray.100" width="30%" p={4} overflowY="auto">
            <Text fontSize="lg" mb={4}>Chat</Text>
            {/* Chat content goes here */}
          </Box>

          {/* Preview Section */}
          <Box bg="white" flex="1" p={4} overflowY="auto">
            {/* URL Bar */}
            <Box mb={4}>
              <Input placeholder="URL bar of preview" />
            </Box>
            {/* Preview content */}
            <Box border="1px" borderColor="gray.200" p={4}>
              <Text fontSize="lg">Preview</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;