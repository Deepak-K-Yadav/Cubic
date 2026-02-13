

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Lab: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Lab
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="body1">
           Admin
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Lab;
