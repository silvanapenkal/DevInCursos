import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { apiService } from '../../services/api'

const useCourseRegister = () => {
  const [data, setData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const registerCourse = async (course) => {
    setIsSubmitting(true)
    const response = await apiService.post('/courses', course)
    console.log(response)
    setError(response.error)
    setData(response.data)
    setIsSubmitting(false)
    if (response.error) {
      alert(response.error)
      return
    }
    navigate('/home')
  }

  return {
    course: data,
    isSubmitting,
    error,
    registerCourse
  }
}

export default useCourseRegister