import { it } from "flow-typed-test";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

it("checks it has a <TabList> and <TabPanel> elements or custom elements the corresponding tabRole", () => {
  let example = (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
});
