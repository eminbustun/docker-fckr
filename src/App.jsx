import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import HeaderSimple from "./components/HeaderSimple";
import MantineSearchBar from "./components/SearchMenu";
import Grids from "./components/Grids";
import NextButton from "./components/NextButton";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <HeaderSimple />
      <MantineSearchBar />
      <Grids />
      <NextButton />
    </MantineProvider>
  );
}

export default App;
