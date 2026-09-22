import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../../features/students/StudentSlice";
import Button from "../Button/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

const StudentForm = ({ editingStudent, setEditingStudent }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setRollNo(editingStudent.rollNo);
      setCourse(editingStudent.course);
    }
  }, [editingStudent]);

  const handleSubmit = () => {
    if (!name || !rollNo || !course) return;

    if (editingStudent) {
      dispatch(updateStudent({ id: editingStudent.id, name, rollNo, course }));
      setEditingStudent(null);
    } else {
      dispatch(addStudent({ id: Date.now(), name, rollNo, course }));
    }

    setName("");
    setRollNo("");
    setCourse("");
  };

  return (
    <div className="flex flex-wrap gap-3 items-center bg-white p-4 rounded-lg shadow-sm">
      <TextField
        size="small"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        size="small"
        label="Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <TextField
        size="small"
        label="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <Button
        text={editingStudent ? "Update" : "Add"}
        color={editingStudent ? "green" : "blue"}
        startIcon={editingStudent ? <SaveIcon /> : <AddIcon />}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default StudentForm;