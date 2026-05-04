import Table from "../../../../component/Table/Table";
import useCourse from "../hook/useCourse";
import pic from "../../../../assets/pic.png";
import deleteCourse from "../services/api/deleteCourese.js";
import { useModal } from "../../../../contexts/model/modelHook/useModel.jsx";
import useAddCourseForm from "../hook/useAddCourseForm.js";
import Model from "../../../../component/layout/Header/Model.jsx";
import AddCourseForm from "./AddCourseForm.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EditCourseProvider, useEditCourseContext } from "../context/EditCourseContext.jsx";
// import useEditCourse from "../hook/useEditCourse.js";


const tableHeading = [
  { header: "Title" },
  { header: "Description" },
  { header: "Level" },
  { header: "Price" },
  { header: "Action" },
];

async function handleDelete(_id) {
  console.log(_id);
  const res = await deleteCourse(_id);
  //  console.log(res);
}

export default function CourseTable() {
  const { modelIsOpen, setModelIsOpen } = useModal();
  const { courses, isLoading } = useCourse();
   const { editCourse } = useEditCourseContext() // ✅ FROM CONTEXT

  //  console.log(form);

  // console.log(courses?.data)
  return (
    <div>
      <Table tableHeading={tableHeading} isLoading={isLoading}>
        {courses.data?.map(
          ({ _id, title, level, price, thumbnail, description }) => {
            // console.log(_id);
            return (
              <tr className="hover:bg-gray-50 text-sm" key={_id}>
                <td className="flex py-4 px-4 space-x-4">
                  <img className="w-15" src={thumbnail} alt="" />
                  <span>{title}</span>
                </td>
                <td className="p-4 w-96">{description}</td>
                <td className="p-4">{level}</td>
                <td className="p-4">{price}</td>
                <td className=" space-x-2 p-4">
                  <span
                    className="px-2 py-1 rounded-xl bg-green-100 text-xs text-green-600 hover:underline"
                    onClick={ () => {
                    editCourse({ title, level, price, description})
                    setModelIsOpen(true);
                    
                    }}
                  >
                    Edit
                  </span>
                  <span
                    className="px-2 py-1 rounded-xl bg-red-100 text-xs text-red-500 hover:underline"
                    onClick={() => handleDelete({ _id: _id })}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          },
        )}
      </Table>

      {/* Model */}
      {/* <Model modelIsOpen={modelIsOpen} setModelIsOpen={setModelIsOpen}>
        <AddCourseForm/>
      </Model> */}
    </div>
  );
}
