import React, { useEffect, useState } from "react";
import { useModal } from "../../../../contexts/model/modelHook/useModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { courseSchema } from "../ValidationSchema/courseSchema";
import { useForm } from "react-hook-form";
import addCourse from "../services/api/addCourse";
// import useEditCourse from "./useEditCourse";

export default function useAddCourseForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const { modelIsOpen, setModelIsOpen } = useModal();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    setValues,
    watch,
    control
  } = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: null,
      instructor: "",
      price: "",
      level: "",
    },
  });


  const descriptionValue = watch("description", "");

  const onSubmit = async (data) => {
    try {

        const form = new FormData();
        console.log(data);
        Object.entries(data).forEach(([key, value]) => {
        form.append(key, value);
        // if(key === "thumbnail"){
        //     console.log(key,value)
        // }
        });
        
      //console.log([...form.entries()]);
      /// APi call
    //   await addCourse(form);
       alert("Successfully Add Course");
      
       
      reset();
      setSelectedFile(null);
      setDescriptionLength(0);

      // Close Model();
      setModelIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file.name);
      setValue("thumbnail", file);
    }
  };

  console.log(isSubmitting);

  const editCourse = (data) => {
    console.log(data)
    console.log("working")
     reset({
    title: data.title,
    level: data.level,
    price: data.price,
    description: data.description,
    instructor: data.instructor || "",
    thumbnail: null,
  });
}

const clearEdit = () => {
    console.log("Resetting values")
    /// When user want to Add new course form will empty
    reset({
      title: "",
      description: "",
      thumbnail: null,
      instructor: "",
      price: "",
      level: "",
    }); // empty form
  };

  return {
    selectedFile,
    descriptionLength,
    setDescriptionLength,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    handleFileChange,
    setValue,
    reset,
    control,
    setValues,
    editCourse,
    clearEdit
  }
}
