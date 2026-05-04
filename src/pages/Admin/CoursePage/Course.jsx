import React from "react";
import CourseTable from "../../../features/Admin/Course/component/CourseTable";
import Spinner from "../../../component/Spinner/Spinner";
import { useModal } from "./../../../contexts/model/modelHook/useModel";
import { configDotenv } from "dotenv";
import Model from "./../../../component/layout/Header/Model";
import AddCourseForm from "./../../../features/Admin/Course/component/AddCourseForm";
import { EditCourseProvider, useEditCourseContext } from "../../../features/Admin/Course/context/EditCourseContext";

export default function Course() {
  const { modelIsOpen, setModelIsOpen } = useModal();
  const { clearEdit } = useEditCourseContext();

  // console.log(modelIsOpen);

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header */}
      <div className="pb-4 flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold pb-2"> Course Management</h1>
          <p>Control your course content, pricing, and visibility from here</p>
        </div>
        <button
          onClick={() => {
            clearEdit();   ///  Reset form form should empty for add new course
            setModelIsOpen(true);
          }}
          className="h-10 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Add Course
        </button>
      </div>
 
      <CourseTable />

      {/* Model */}
      <Model modelIsOpen={modelIsOpen} setModelIsOpen={setModelIsOpen}>
        <AddCourseForm />
      </Model>
    </div>
  );
}
