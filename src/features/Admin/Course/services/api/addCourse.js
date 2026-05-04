import React from 'react'
import { get, post } from '../../../../../utils/httpClient'

export default function addCourse(data) {
    return post("/course/addCourse",data)
}
