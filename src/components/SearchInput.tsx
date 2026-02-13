import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
  return (
    <TextField
      placeholder="Search for Devices"
      size="small"
      sx={{ width: 280, paddingRight: 2, borderRadius:0 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
