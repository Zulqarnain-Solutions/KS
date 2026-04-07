import { Children, createContext, useContext, useEffect, useState } from "react"
import { getCourses } from "../api/authApi";


const CourseContext = createContext();


// CourseProvider 
export function CourseProvider({children}) {

    const [ course, setCourse ] = useState({name:"HI"});

    useEffect( () => {
        async function loadCourses() {
            try {
                await getCourses().then( (result) => { 
                     setCourse(result);
                });
                // console.log(data);
                
            } catch (error) {
                console.log("Error while getting courses", error.message );
            }
        }

        loadCourses();
    }, [])
  
    console.log(course?.data);
    return (
        <CourseContext.Provider
        value={{course}}
        >
            {
                children
            }
        </CourseContext.Provider>
    );
}


export function useCourse() {
  return useContext(CourseContext);
}

