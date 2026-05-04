import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { courseSchema } from "../ValidationSchema/courseSchema";
import { useModal } from "../../../../contexts/model/modelHook/useModel";
import useAddCourseForm from "../hook/useAddCourseForm";
import { useEditCourseContext } from "../context/EditCourseContext";

export default function AddCourseForm() {


  const {
    reset,
    selectedFile,
    descriptionLength,
    setDescriptionLength,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    handleFileChange,
    control } = useEditCourseContext();

//     useEffect( () => {
//   reset(ss)
// },[ss])
 
  return (
    <>
    {/* <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6"> */}
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Add New Course
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Fill in the details below to create a new course for your platform
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Course Name */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Course Name
          </label>

          <input
            id="title"
            type="text"
            placeholder="Enter course name"
            {...register("title")}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 outline-none transition-all duration-150 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          {errors.title && (
            <p className="text-red-500 text-xs mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>

          <textarea
            id="description"
            maxLength={1000}
            placeholder="Write course description..."
            {...register("description")}
            onChange={(e) => {
              setDescriptionLength(e.target.value.length);
            }}
            className="w-full h-32 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 outline-none transition-all duration-150 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
          />

          <div className="flex justify-between items-center mt-1">
            {errors.description ? (
              <p className="text-red-500 text-xs">
                {errors.description.message}
              </p>
            ) : (
              <div />
            )}

            <p className="text-xs text-gray-400">
              {descriptionLength}/1000
            </p>
          </div>
        </div>

        {/* Course Image */}
        <div>
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Course Image
          </label>

          <input
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <label
            htmlFor="thumbnail"
            className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition"
          >
            Upload Image
          </label>

          {selectedFile && (
            <p className="text-sm text-gray-500 mt-2">{selectedFile}</p>
          )}

          {errors.thumbnail && (
            <p className="text-red-500 text-xs mt-1">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* Instructor Name */}
        <div>
          <label
            htmlFor="instructor"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Instructor Name
          </label>

          <input
            id="instructor"
            type="text"
            placeholder="Enter instructor name"
            {...register("instructor")}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 outline-none transition-all duration-150 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          {errors.instructor && (
            <p className="text-red-500 text-xs mt-1">
              {errors.instructor.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price
          </label>

          <div className="relative">
            <span className="absolute left-3 top-[8px] text-sm text-gray-400">
              Rs.
            </span>

            <input
              id="price"
              type="number"
              placeholder="0.00"
              name="price"
              control={control}
              {...register("price")}
              className="w-full border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-sm placeholder-gray-400 outline-none transition-all duration-150 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {errors.price && (
            <p className="text-red-500 text-xs mt-1">
              {errors.price.message}
            </p>
          )}
        </div>

        {/* Level */}
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Level
          </label>

          <select
            id="level"
            {...register("level")}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white outline-none transition-all duration-150 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select course level</option>
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Basic to Advanced">Basic to Advanced</option>
          </select>

          {errors.level && (
            <p className="text-red-500 text-xs mt-1">
              {errors.level.message}
            </p>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={ () => setModelIsOpen(false) }
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            onClick={ () => {
              console.log(BTTTT)
              console.log(isSubmitting);
            }}
          >
            {isSubmitting ? "Saving..." : "Add Course" }
          </button>
        </div>
      </form>
    {/* </div> */}
    </>
  );
}











// import React from "react";
// import { useForm } from "react-hook-form";

// import { courseSchema } from "../ValidationSchema/courseSchema";
// import { zodResolver } from '@hookform/resolvers/zod';



// export default function AddCourseForm({ onClose }) {
//   // Initialize React Hook Form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm({
//     resolver: zodResolver(courseSchema),

//     // Default values
//     defaultValues: {
//       title: "",
//       price: "",
//     },
//   });

//   // Submit handler
//   const onSubmit = async (data) => {
//     try {
//       // Simulate API call
//       console.log("Form Data:", data);

//       // Reset form after success
//       reset();

//       // Close modal
//     //   onClose();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//     <h1>Add Course</h1>
//     <p>Add subline/heading</p>
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-5"
//     >
//       {/* Course Title */}
//       <div>
//         <label className="block mb-1 ">
//           Course Title
//         </label>

//         <input
//           type="text"

//           // register connects input to RHF
//           {...register("title")}

//           className="w-full border border-gray-200 rounded-lg px-4 py-2"
//           placeholder="Enter course title"
//         />

//         {/* Validation Error */}
//         {errors.title && (
//           <p className="text-red-500 text-sm mt-1">
//             {errors.title.message}
//           </p>
//         )}
//       </div>

//       {/* Price */}
//       <div>
//         <label className="block mb-1 ">
//           Price
//         </label>

//         <input
//           type="number"
//           {...register("price")}
//           className="w-full border rounded-lg border-gray-200 rounded-lg px-4 py-2"
//           placeholder="Enter course price"
//         />

//         {errors.price && (
//           <p className="text-red-500 text-sm mt-1">
//             {errors.price.message}
//           </p>
//         )}
//       </div>

//       {/* Footer Buttons */}
//       <div className="flex justify-end gap-3 pt-4">
//         <button
//           type="button"
//           onClick={onClose}
//           className="px-4 py-2 rounded border border-gray-200 rounded-lg px-4 py-2"
//         >
//           Cancel
//         </button>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
//         >
//           {isSubmitting
//             ? "Saving..."
//             : "Add Course"}
//         </button>
//       </div>
//     </form>
//     </>
//   );
// }