import { useSelector } from "react-redux";
import StudentItem from "../StudentItem/StudentItem";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

const StudentList = ({ setEditingStudent, searchTerm }) => {
  const students = useSelector((state) => state.students.list);

  const filteredStudents = students.filter((student) =>
    (student.name || "").toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  return (
    <TableContainer component={Paper} sx={{ borderRadius: "10px", overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#f0f0f0" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Roll No</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Course</TableCell>
            <TableCell sx={{ fontWeight: "bold", width: 100 }} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredStudents.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ color: "gray", py: 3 }}>
                No students found
              </TableCell>
            </TableRow>
          ) : (
            filteredStudents.map((student) => (
              <StudentItem
                key={student.id}
                student={student}
                setEditingStudent={setEditingStudent}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;