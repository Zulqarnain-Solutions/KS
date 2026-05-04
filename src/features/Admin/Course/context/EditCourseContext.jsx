import React, { createContext, useContext } from "react";
import useAddCourseForm from "../hook/useAddCourseForm";
// import useAddCourseForm from './../hook/useAddCourseForm';

const EditCourseContext = createContext();

export function EditCourseProvider({ children }) {
  const form = useAddCourseForm(); // ✅ SINGLE INSTANCE

  return (
    <EditCourseContext.Provider value={form}>
      {children}
    </EditCourseContext.Provider>
  );
}

export function useEditCourseContext() {
  const context = useContext(EditCourseContext);
//   console.log(context);

  if (!context) {
    throw new Error("Must be used inside EditCourseProvider");
  }
  return context;
}