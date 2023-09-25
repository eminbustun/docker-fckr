import {
  Group,
  Paper,
  Text,
  ThemeIcon,
  SimpleGrid,
  Button,
} from "@mantine/core";
import {
  IconPlus,
  IconApple,
  IconBrandMongodb,
  IconDownload,
  IconVersions,
  IconUser,
} from "@tabler/icons-react";
import classes from "../styles/Grids.module.css";

const data = [
  {
    dockerImageLogo: <IconBrandMongodb />,
    dockerImageName: "Mongo",
    description: "Mongo is a database. ",
    userImg: IconBrandMongodb,
    username: "oguzhanaydin",
    versionCount: 5,
    downloadCount: 72500,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Kafka",
    description: "Kafka is a message broker.",
    userImg: "img",
    username: "cuneytercel",
    versionCount: 18,
    downloadCount: 50698,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
  },
  {
    dockerImageLogo: <IconApple />,
    dockerImageName: "Elastic Search",
    description: "Elastic Search is a fast database.",
    userImg: "img",
    username: "eminustun",
    versionCount: 9,
    downloadCount: 23458,
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
          <Group
            justify="space-between"
            align="center"
            pos="relative"
            display="grid"
          >
            <ThemeIcon
              color="gray"
              variant="light"
              style={{
                color: "green",
              }}
              size={38}
              radius="md"
            >
              {stat.dockerImageLogo}
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
            <Group gap="xs" justify="flex-start">
              <Group gap="xs">
                <IconUser />
                <Text>{stat.username}</Text>
              </Group>
              <Group gap="xs">
                <IconVersions />
                <Text>{stat.versionCount}</Text>
              </Group>
              <Group gap="xs" pos="relative">
                <IconDownload />
                <Text>{stat.downloadCount}</Text>
              </Group>
            </Group>
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
      <SimpleGrid cols={{ base: 1, sm: 3 }} mb={25}>
        {stats}
      </SimpleGrid>
      <Button color="green" className={classes.btnNext}>
        Next
      </Button>
    </div>
  );
};

export default Grids;
