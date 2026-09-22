import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetStudents } from "../../features/students/StudentSlice";

import StudentForm from "../../components/StudentForm/StudentForm";
import StudentList from "../../components/StudentList/StudentList";
import TotalStudents from "../../components/TotalStudents/TotalStudents";
import SearchStudents from "../../components/SearchStudents/SearchStudents";
import Button from "../../components/Button/Button";

function Dashboard() {
  const dispatch = useDispatch();
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Student Management System</h1>

      <StudentForm editingStudent={editingStudent} setEditingStudent={setEditingStudent} />

      <TotalStudents />

      <Button text="Reset All" color="gray" onClick={() => dispatch(resetStudents())} />

      <div className="mt-4">
        <SearchStudents searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <StudentList setEditingStudent={setEditingStudent} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Dashboard;