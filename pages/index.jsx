import { Box, Text, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box h="100vh" d="flex" bgColor="gray.900" opacity="0.5">
      <Box my="auto" mx="auto">
        <Center as="Text" fontWeight="semibold" color="white" fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}>
          Chroma Minecraft
        </Center>
        <Center as="Text" fontWeight="medium" color="white" fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}>
          Server minecraft survival yang mendukung berbagai platform (Java / Bedrock / Pocket Edition)
        </Center>
      </Box>
    </Box>
  );
}
