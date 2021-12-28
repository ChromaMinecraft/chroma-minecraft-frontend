import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ListItem,
  OrderedList,
  useColorMode,
} from "@chakra-ui/react";
export default function RandomItemVoteTab(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tabs>
      <TabList
        borderTopRadius="md"
        bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
        color={colorMode === "dark" ? "white" : "blue.900"}
      >
        {props.rarity.map((v, i) => {
          return <Tab>{props.rarity[i]}</Tab>;
        })}
      </TabList>

      <TabPanels
        borderBottomRadius="md"
        bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
        color={colorMode === "dark" ? "white" : "blue.900"}
      >
        {props.items.map((v, i) => {
          return (
            <TabPanel>
              <OrderedList>
                {props.items[i].map((w, j) => {
                  return <ListItem>{props.items[i][j]}</ListItem>;
                })}
              </OrderedList>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
}
