

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Network: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Network
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="body1">
            Network configuration and monitoring details go here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Network;
