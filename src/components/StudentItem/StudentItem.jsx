import { useDispatch } from "react-redux";
import { deleteStudent } from "../../features/students/StudentSlice";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StudentItem = ({ student, setEditingStudent }) => {
  const dispatch = useDispatch();

  return (
    <TableRow hover>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.rollNo}</TableCell>
      <TableCell>{student.course}</TableCell>
      <TableCell align="center" sx={{ width: 100, whiteSpace: "nowrap" }}>
        <IconButton
          size="small"
          onClick={() => setEditingStudent(student)}
          sx={{ color: "#22c55e" }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => dispatch(deleteStudent(student.id))}
          sx={{ color: "#ef4444" }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default StudentItem;