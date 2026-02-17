import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import ProjectCard from "../components/ProjectCard";

type Props = {
  onSelect: (projectId: string) => void; // ✅ Now expects projectId
};

export default function SelectProject({ onSelect }: Props) {
  const BASE_URL = import.meta.env.VITE_CORELLIUM_BASE;
  const API_KEY = import.meta.env.VITE_CORELLIUM_API_KEY;

  const [projects, setProjects] = React.useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");

  /* --------------------------------------------------
     🔥 Fetch Projects
  -------------------------------------------------- */
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${BASE_URL}/v1/projects`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();

        setProjects(data || []);
        setFilteredProjects(data || []);
      } catch (error) {
        console.error("Project API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [BASE_URL, API_KEY]);

  /* --------------------------------------------------
     🔎 Search Filter
  -------------------------------------------------- */
  React.useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name?.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProjects(filtered);
  }, [search, projects]);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
      {/* Title */}
      <Typography variant="h4" align="center" fontWeight={600} mb={2}>
        Select Project
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        maxWidth={600}
        mx="auto"
        mb={4}
      >
        Choose a project to create or manage virtual devices.
      </Typography>

      {/* Search */}
      <Box display="flex" justifyContent="center" mb={6}>
        <TextField
          placeholder="Search for Projects"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
      </Box>

      {/* Loading */}
      {loading && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}

      {/* Grid */}
      {!loading && (
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              <ProjectCard
                title={project.name} // ✅ Display name
                color="#4a90e2"
                instancesUsed={project.quotasUsed?.instances ?? 0}
                instancesTotal={project.quotas?.instances ?? 0}
                coresUsed={project.quotasUsed?.cores ?? 0}
                coresTotal={project.quotas?.cores ?? 0}
                internet={
                  project.settings?.["internet-access"] ?? false
                }
                onClick={() => onSelect(project.id)} // ✅ PASS PROJECT ID
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
