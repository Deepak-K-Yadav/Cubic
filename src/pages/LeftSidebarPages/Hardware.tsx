

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Hardware: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Hardware
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="body1">
            Hardware management and diagnostics information.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Hardware;
