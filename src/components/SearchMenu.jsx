import { Input, Container, Flex } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "../styles/SearchMenu.module.css";

const MantineSearchBar = () => {
  const icon = <IconSearch style={{ width: 16, height: 16 }} />;
  return (
    <>
      <Container mt={100} className={classes.border} mb={120}>
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
            radius="xl"
          />
        </Flex>
      </Container>
    </>
  );
};

export default MantineSearchBar;
