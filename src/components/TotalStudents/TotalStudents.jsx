import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import GroupIcon from "@mui/icons-material/Group";

const TotalStudents = () => {
  const total = useSelector((state) => state.students.list.length);

  return (
    <Typography
      variant="subtitle1"
      sx={{ display: "flex", alignItems: "center", gap: 1, color: "#374151", fontWeight: 500 }}
    >
      <GroupIcon fontSize="small" />
      Total Students: {total}
    </Typography>
  );
};

export default TotalStudents;