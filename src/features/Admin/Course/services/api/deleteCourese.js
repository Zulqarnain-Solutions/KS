import React from 'react'
import { get, post } from '../../../../../utils/httpClient'

export default function deleteCourse(data) {
    return post("/course/deleteCourse",data)
}