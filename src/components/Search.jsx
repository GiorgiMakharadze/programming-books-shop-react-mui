import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      label="Search"
      type="search"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        mb: "24px",
      }}
    />
  );
};

export default Search;
