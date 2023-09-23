import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import HeaderSimple from "../components/HeaderSimple";
import MantineSearchBar from "../components/SearchMenu";
import Grids from "../components/Grids";
import NextButton from "../components/NextButton";

const HomePage = () => {
  return (
    <MantineProvider>
      {/*<HeaderSimple />*/}
      <MantineSearchBar />
      <Grids />
      <NextButton />
    </MantineProvider>
  );
};

export default HomePage;
