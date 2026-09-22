import { createSlice } from "@reduxjs/toolkit";

// local storage sy purana data uthya haai
const getStoredStudents = () => {
  const data = localStorage.getItem("students");
  return data ? JSON.parse(data) : [];
};

const initialState = {// set starting state of redux
  list: getStoredStudents(),
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("students", JSON.stringify(state.list));
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter((student) => student.id !== action.payload);// delt std through id
      localStorage.setItem("students", JSON.stringify(state.list));
    },
    updateStudent: (state, action) => {
      const index = state.list.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      localStorage.setItem("students", JSON.stringify(state.list));
    },
    resetStudents: (state) => {
      state.list = [];
      localStorage.setItem("students", JSON.stringify(state.list));
    },
  },
});

export const { addStudent, deleteStudent, updateStudent, resetStudents } = studentSlice.actions;
export default studentSlice.reducer;