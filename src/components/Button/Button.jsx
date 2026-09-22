import MuiButton from "@mui/material/Button";

const colorMap = {
  blue: "#3b82f6",
  red: "#ef4444",
  green: "#22c55e",
  gray: "#6b7280",
};

const hoverMap = {
  blue: "#2563eb",
  red: "#dc2626",
  green: "#16a34a",
  gray: "#4b5563",
};

const Button = ({ text, onClick, color = "blue", startIcon }) => {
  return (
    <MuiButton
      onClick={onClick}
      startIcon={startIcon}
      variant="contained"
      sx={{
        textTransform: "none",
        bgcolor: colorMap[color],
        "&:hover": { bgcolor: hoverMap[color] },
        borderRadius: "6px",
        px: 2,
        boxShadow: "none",
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;