import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  useColorMode,
} from "@chakra-ui/react";
export default function Rules(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tabs>
      <TabList
        borderTopRadius="md"
        bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
        color={colorMode === "dark" ? "white" : "blue.900"}
      >
        <Tab>Deskripsi</Tab>
        {props.example.map((v, i) => {
          if (props.example.length == 1) return <Tab>Contoh</Tab>;
          return <Tab>Contoh {i + 1}</Tab>;
        })}
        <Tab>Hukuman</Tab>
      </TabList>

      <TabPanels
        borderBottomRadius="md"
        bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
        color={colorMode === "dark" ? "white" : "blue.900"}
      >
        <TabPanel>
          <Text>{props.description}</Text>
        </TabPanel>
        {props.example.map((v, i) => {
          if (props.example.length == 1)
            return <TabPanel>{props.example[i]}</TabPanel>;
          return <TabPanel>{props.example[i]}</TabPanel>;
        })}
        <TabPanel>
          {props.punishment.map((v, i) => {
            if (props.punishment.length == 1)
              return <Text>{props.punishment[i]}</Text>;
            return (
              <Text>
                {i + 1} - {props.punishment[i]}
              </Text>
            );
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
