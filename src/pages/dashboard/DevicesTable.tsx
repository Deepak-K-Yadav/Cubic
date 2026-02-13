import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const rows = [
  {
    name: "Judge-vision",
    version: "2.1.0 Custom",
    state: "Off",
    model: "i.MX 93",
    createdBy: "kagrawal@judge.com",
    createdAt: "March 6, 2025",
  },
  {
    name: "smiling-melon",
    version: "3.5.99 Custom",
    state: "On",
    model: "Cortex-R52 System",
    createdBy: "nkumar02@judge.com",
    createdAt: "February 4, 2026",
  },
  {
    name: "vigorous-glacier",
    version: "1.0.0 Custom",
    state: "Off",
    model: "Cortex-R82 System (VirtIO networking)",
    createdBy: "kagrawal@judge.com",
    createdAt: "July 28, 2025",
  },
];

export default function DevicesTable() {
  return (
    <Box sx={{ mt: 5 }}>
      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid #e5e7eb",
          borderRadius:1,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 3,
            py: 2,
            backgroundImage: "url(./table-bg-1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 600 }}>
            AVH_Ew
          </Typography>
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
                <TableCell>Name</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Created by</TableCell>
                <TableCell>Created at</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    "&:last-child td": { borderBottom: 0 },
                  }}
                >
                  {/* Name + Version */}
                  <TableCell>
                    <Typography fontWeight={500}>{row.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {row.version}
                    </Typography>
                  </TableCell>

                  {/* State */}
                  <TableCell>
                    <Chip
                      label={row.state}
                      size="small"
                      sx={{
                        bgcolor: row.state === "On" ? "#d1fae5" : "#e5e7eb",
                        color: row.state === "On" ? "#065f46" : "#374151",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>

                  <TableCell>{row.model}</TableCell>
                  <TableCell>{row.createdBy}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>

                  {/* Actions */}
                  <TableCell align="right">
                    <IconButton size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
