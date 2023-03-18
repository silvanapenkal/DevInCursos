import { useParams } from "react-router-dom";
import "./CourseDetailsPage.css";
import useCourseDetails from "../../hooks/useCourseDetails";

export const CourseDetailsPage = () => {

    const {id} = useParams();
    console.log(id);
    const {course} = useCourseDetails(id);
    console.log(course);

    return (
        <div className="detalhes">
            <h2>Detalhes do Curso</h2>
            <img src={course?.imageUrl}/>
            <p>{course?.name}</p>
            <p>{course?.duration}</p>
            <p>{course?.description}</p>
            <p>{course?.category}</p>
        </div>
    )
  }

export default CourseDetailsPage;