import React, { useEffect, useState } from 'react'
import getCourses from '../services/api/getCourses';


export default function useCourse() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .finally(() => setIsLoading(false));
  }, []);

  return { courses, isLoading };
};