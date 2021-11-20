import { Box, Button, Heading, Image } from "@theme-ui/components";
import * as React from "react";

interface Props {
  refetch: () => void;
}

const Error: React.FC<Props> = props => {
  const { children, refetch } = props;

  const handleClick = () => {
    refetch();
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        "& > *": { marginTop: "1rem" },
      }}
      role="alert"
      aria-label="error page"
    >
      <Heading as="h1">{children}</Heading>
      <Image width="20rem" height="20rem" src="./error.svg" alt="error" />
      <Button variant="primary" onClick={handleClick}>
        Refetch
      </Button>
    </Box>
  );
};

export default Error;
