import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import HeaderSimple from "./components/HeaderSimple";
import MantineSearchBar from "./components/SearchMenu";

function App() {
  return (
    <MantineProvider>
      <HeaderSimple />
      <MantineSearchBar />
    </MantineProvider>
  );
}

export default App;
