import { Flex, Heading } from "@chakra-ui/react";


const Index = () => (
  <Flex
    flexDir="column"
    align="center"
    justify="center"
    bg="green.900"
    height="100vh"
  >
    <Heading maxW="600px" textAlign="center" color="white">
      Welcome Google Oauth in Next.js Application
    </Heading>
  </Flex>
);

export default Index;
