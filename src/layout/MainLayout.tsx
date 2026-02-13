import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6">MUI Boilerplate</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}
