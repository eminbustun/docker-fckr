import { Input, Container, Flex, Text, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "../styles/SearchMenu.module.css";

const MantineSearchBar = () => {
  const icon = <IconSearch style={{ width: 16, height: 16 }} />;
  return (
    <>
      <Container
        mt={50}
        className={classes.border}
        mb={20}
        align="center"
        justify="center"
      >
        <Text fw={700} size="xl" c="blue">
          DOCKER-FUCKER
        </Text>
        <Space h={20} />
        <Text size="md">
          This website reliefs the pain of finding all the images by yourself.
          Just click what you need and set the environment. Then you will get
          the YAML file.
        </Text>
        <Space h="xl" />
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap="sm"
          align="center"
          justify="center"
        >
          <Input
            className={classes.input}
            leftSection={icon}
            placeholder="Search"
            radius="l"
          />
        </Flex>
      </Container>
    </>
  );
};

export default MantineSearchBar;
