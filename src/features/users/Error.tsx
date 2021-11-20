import { Box, Button, Heading } from "@theme-ui/components";
import * as React from "react";

interface Props {
  refetch: () => void;
}
const Error: React.FC<Props> = props => {
  const { children, refetch } = props;

  const handleClick = () => {
    refetch;
  };

  return (
    <Box
      sx={{ textAlign: "center", "& > *": { marginTop: "1rem" } }}
      role="alert"
      aria-label="Error"
    >
      <Heading as="h1">{children}</Heading>
      <img src="./error.svg" alt="error" />
      <Button variant="primary" onClick={handleClick}>
        Refetch
      </Button>
    </Box>
  );
};

export default Error;
