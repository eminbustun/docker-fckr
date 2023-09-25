import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import MantineSearchBar from "../components/SearchMenu";
import Grids from "../components/Grids";

const HomePage = () => {
  return (
    <MantineProvider>
      {/*<HeaderSimple />*/}
      <MantineSearchBar />
      <Grids />
    </MantineProvider>
  );
};

export default HomePage;
