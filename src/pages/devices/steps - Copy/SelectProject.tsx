import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  CircularProgress,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProjectCard from "../components/ProjectCard";
import React from "react";

type Props = {
  onSelect: (project: string) => void;
};

export default function SelectProject({ onSelect }: Props) {
  const BASE_URL = import.meta.env.VITE_CORELLIUM_BASE;
  const API_KEY = import.meta.env.VITE_CORELLIUM_API_KEY;

  const [projects, setProjects] = React.useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");

  // ✅ Fetch Projects
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

        // 🔥 Map your real schema
        const formatted = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          instancesUsed: item.quotasUsed?.instances ?? 0,
          instancesTotal: item.quotas?.instances ?? 0,
          coresUsed: item.quotasUsed?.cores ?? 0,
          coresTotal: item.quotas?.cores ?? 0,
          ramUsed: item.quotasUsed?.ram ?? 0,
          ramTotal: item.quotas?.ram ?? 0,
          internet: item.settings?.["internet-access"] ?? false,
        }));

        setProjects(formatted);
        setFilteredProjects(formatted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ✅ Search
  React.useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [search, projects]);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
      <Typography variant="h4" align="center" fontWeight={600} mb={2}>
        Select Project
      </Typography>

      <Box display="flex" justifyContent="center" mb={6}>
        <TextField
          placeholder="Search for Projects"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 350, bgcolor: "#fff", borderRadius: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {loading && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}

      {!loading && (
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                  },
                }}
                onClick={() => onSelect(project.name)}
              >
                {/* Project Name */}
                <Typography fontWeight={600} fontSize={18} mb={2}>
                  {project.name}
                </Typography>

                {/* Instances */}
                <Typography variant="body2" mb={1}>
                  Instances: {project.instancesUsed} / {project.instancesTotal}
                </Typography>

                {/* Cores */}
                <Typography variant="body2" mb={1}>
                  Cores: {project.coresUsed} / {project.coresTotal}
                </Typography>

                {/* RAM */}
                <Typography variant="body2" mb={2}>
                  RAM: {project.ramUsed} / {project.ramTotal} MB
                </Typography>

                {/* Internet Status */}
                <Chip
                  label={project.internet ? "Internet Enabled" : "No Internet"}
                  size="small"
                  sx={{
                    bgcolor: project.internet ? "#d1fae5" : "#fee2e2",
                    color: project.internet ? "#065f46" : "#991b1b",
                    fontWeight: 500,
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
