import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "../styles/NextButton.module.css";

const NextButton = () => {
  return (
    <>
      <Button
        className={classes.button}
        rightSection={<IconArrowRight size={14} />}
      >
        Next
      </Button>
    </>
  );
};

export default NextButton;
