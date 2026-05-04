import React from 'react'
import { get } from '../../../../../utils/httpClient'

export default function getCourses() {
    return get("/course/getCourses")
}
