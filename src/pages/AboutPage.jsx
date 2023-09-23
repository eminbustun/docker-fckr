import React from "react";
import { Container, Image, MantineProvider, Space, Text } from "@mantine/core";
import HeaderSimple from "../components/HeaderSimple";

const AboutPage = () => {
  return (
    <MantineProvider>
      {/*<HeaderSimple />*/}
      <Container>
        <Text size="lg">ABOUT US</Text>
        <Space />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png"></Image>

        <Space />
        <Space />
        <Space />
        <Text>Buraya aciklama gelecek.</Text>
      </Container>
    </MantineProvider>
  );
};

export default AboutPage;
