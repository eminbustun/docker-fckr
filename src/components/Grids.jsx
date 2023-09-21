import { Group, Paper, Text, ThemeIcon, SimpleGrid, Flex } from "@mantine/core";
import {
  IconPlus,
  IconApple,
  IconDownload,
  IconVersions,
  IconUser,
} from "@tabler/icons-react";
import classes from "../styles/Grids.module.css";

const data = [
  {
    dockerImageLogo: "MongoLogo",
    dockerImageName: "Mongo",
    description: "Mongo is a database.",
    userImg: "img",
    username: "oguzhanaydin",
    versionCount: 5,
    downloadCount: 72500,
  },
];

const Grids = () => {
  const stats = data.map(stat => {
    const DiffIcon = IconPlus;

    return (
      <>
        <Paper
          className={classes.plus}
          withBorder
          p="md"
          radius="md"
          fw={700}
          fz="xl"
          key={stat.dockerImageName}
        >
          <Group justify="apart" align="center" pos="relative" display="grid">
            <ThemeIcon
              color="gray"
              variant="light"
              style={{
                color: "green",
              }}
              size={38}
              radius="md"
            >
              <IconApple />
            </ThemeIcon>
            <div>
              <Text
                c="dimmed"
                tt="uppercase"
                fw={700}
                fz="xs"
                className={classes.label}
              >
                {stat.dockerImageName}
              </Text>
              <Text fw={300} fz="sm">
                {stat.description}
              </Text>
            </div>
            <ThemeIcon
              right="0%"
              top="0%"
              pos="absolute"
              color="gray"
              variant="light"
              style={{
                color: "green",
              }}
              size={38}
              radius="md"
            >
              <DiffIcon size="1.8rem" stroke={1.5} />
            </ThemeIcon>
            <div className={classes.onlyFlex}>
              <div className={classes.dpl}>
                <IconUser />
                <Text>{stat.username}</Text>
              </div>
              <div className={classes.dpl}>
                <IconVersions />
                <Text>{stat.versionCount}</Text>
              </div>
              <div className={classes.dpl}>
                <IconDownload />
                <Text>{stat.downloadCount}</Text>
              </div>
            </div>
          </Group>
          <Text c="dimmed" fz="sm" mt="md">
            <Text component="span" c={stat.diff > 0 ? "teal" : "grey"} fw={700}>
              {stat.diff}
            </Text>{" "}
          </Text>
        </Paper>
      </>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
    </div>
  );
};

export default Grids;
