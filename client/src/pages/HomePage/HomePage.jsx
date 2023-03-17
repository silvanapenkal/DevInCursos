// import CourseFilter from "../../components/CourseFilter/CourseFilter";
// import CourseList from "../../components/CourseList/CourseList";
// import "./HomePage.css";

// import reactJsImg from "../../assets/reactjs.png";
// import reactTsImg from "../../assets/reactts.png";
// import reactRouterImg from "../../assets/reactrouter.png";
// import contextApiImg from "../../assets/contextapi.png";
// import { useDevinCourseContext } from "../../DevinCourseContext";

// const listaDeCursos = [
//   {
//     id: 635,
//     imageUrl: reactJsImg,
//     name: "React Js",
//     category: "front-end",
//     description: "Curso sobre React Js",
//     duration: 6,
//   },
//   {
//     id: 873,
//     imageUrl: reactTsImg,
//     name: "React com TS",
//     category: "front-end",
//     description: "Curso sobre React com TS",
//     duration: 6,
//   },
//   {
//     id: 935,
//     imageUrl: reactRouterImg,
//     name: "React Router",
//     category: "front-end",
//     description: "Curso sobre React Router",
//     duration: 6,
//   },
//   {
//     id: 333,
//     imageUrl: contextApiImg,
//     name: "Context API",
//     category: "front-end",
//     description: "Curso sobre Context API",
//     duration: 6,
//   },
//   {
//     id: 844,
//     imageUrl: reactJsImg,
//     name: "React Js",
//     category: "front-end",
//     description: "Curso sobre React Js",
//     duration: 6,
//   },
//   {
//     id: 287,
//     imageUrl: reactTsImg,
//     name: "React com TS",
//     category: "front-end",
//     description: "Curso sobre React com TS",
//     duration: 6,
//   },
//   {
//     id: 118,
//     imageUrl: reactRouterImg,
//     name: "React Router",
//     category: "front-end",
//     description: "Curso sobre React Router",
//     duration: 6,
//   },
//   {
//     id: 589,
//     imageUrl: contextApiImg,
//     name: "Context API",
//     category: "front-end",
//     description: "Curso sobre Context API",
//     duration: 6,
//   },
// ];

// function HomePage() {
//   const userInfo = useDevinCourseContext();
//   const isAdmin = (userInfo[2].isAdmin);
//   return (
//     <div className="homePageContainer">
//       {isAdmin && <button>Cadastrar Curso</button>}
//       <CourseFilter />
//       <CourseList list={listaDeCursos} />
//     </div>
//   );
// }

// export default HomePage;

// import { Spinner } from 'phosphor-react';

import CourseFilter from '../../components/CourseFilter/CourseFilter';
import CourseList from '../../components/CourseList/CourseList';
import useCourseList from '../../hooks/useCourseList';

import emptyState from '../../assets/empty.svg';

import './HomePage.css';

function HomePage() {
  const { courses, error, isLoading, fetchData } = useCourseList();

  return (
    <div className='homePageContainer'>
      <CourseFilter onFilter={fetchData} />

      {/* {isLoading && <Spinner width={100} />} */}

      {!isLoading && !!error && <p>{error}</p>}

      {!isLoading && !error && !!courses.length && <CourseList list={courses} />}

      {!isLoading && !error && !courses.length && (
        <img height={500} src={emptyState} alt='Imagem de nenhum item encontrado' />
      )}
    </div>
  );
}

export default HomePage;