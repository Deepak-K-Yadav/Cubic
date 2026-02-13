import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProjectCard from "../components/ProjectCard";

type Props = {
  onSelect: (project: string) => void;
};

export default function SelectProject({ onSelect }: Props) {
  const projects = [
    { name: "ARM", color: "#1e6fa8" },
    { name: "AVH_EW", color: "#6f42c1" },
    { name: "Default Project", color: "#4a90e2" },
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
      {/* ===== Title ===== */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={600}
        mb={2}
      >
        Select project
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        maxWidth={600}
        mx="auto"
        mb={4}
      >
        Choose a project to create or manage virtual devices.
        Search or create a new project to group your devices into
        an isolated virtual network.
      </Typography>

      {/* ===== Search + Button ===== */}
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        mb={6}
        flexWrap="wrap"
      >
        <TextField
          placeholder="Search for Projects"
          sx={{
            width: 350,
            bgcolor: "#fff",
            borderRadius: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            px: 3,
            background:
              "linear-gradient(90deg, #337DD6, #1970D0)",
            boxShadow: "none",
            "&:hover": {
              background:
                "linear-gradient(90deg, #2f6fbf, #155fa8)",
            },
          }}
        >
          + Create New Project
        </Button>
      </Box>

      {/* ===== Project Cards ===== */}
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.name} style={{width: "25%", height: "100%" }}>
            <ProjectCard
              title={project.name}
              color={project.color}
              onClick={() => onSelect(project.name)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
