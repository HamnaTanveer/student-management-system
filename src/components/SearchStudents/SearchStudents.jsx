import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchStudents = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      size="small"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{
        bgcolor: "white",
        borderRadius: "6px",
        width: { xs: "100%", sm: "300px" },
        mb: 2,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "gray" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchStudents;