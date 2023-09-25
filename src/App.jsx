import React from "react";
import "@mantine/core/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HeaderSimple from "./components/HeaderSimple";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Router>
        <HeaderSimple />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
