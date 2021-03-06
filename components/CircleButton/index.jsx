import { Flex, Link, Heading } from "@chakra-ui/react";

export default function CircleButton(props) {
  return (
    <Flex
      flexDirection="column"
      key={props.icon.key}
      mx={{ base: "3", sm: "6" }}
      w="auto"
      justifyContent="center"
    >
      <Flex flexDirection="row" w="auto" justifyContent="center">
        <Link
          borderWidth="1px"
          borderColor="white"
          borderStyle="solid"
          borderRadius="full"
          color="white"
          fontWeight="bold"
          padding="5"
          _hover={{
            backgroundColor: "white",
            color: "gray.800",
          }}
          id={props.icon.id}
          href={props.icon.url}
          target={props.icon.target}
          onClick={props.onClick}
        >
          {props.icon.content}
        </Link>
      </Flex>
      <Flex w="100%" justifyContent="center">
        <Heading
          as="h1"
          size={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
          marginTop="1"
          color="white"
        >
          {props.icon.text}
        </Heading>
      </Flex>
    </Flex>
  );
}
