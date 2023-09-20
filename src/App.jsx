import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import HeaderSimple from "./HeaderSimple";

function App() {
  return (
    <MantineProvider>
      <HeaderSimple />
    </MantineProvider>
  );
}

export default App;
