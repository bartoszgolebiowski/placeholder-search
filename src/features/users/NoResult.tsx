import { Card, Text } from "@theme-ui/components";
import * as React from "react";

const NoResult: React.FC = props => {
  const { children } = props;

  return (
    <Card
      role="main"
      aria-label="empty-users"
      sx={{
        minWidth: 256,
        minHeight: 256,
      }}
    >
      <Text>{children}</Text>
    </Card>
  );
};

export default NoResult;
