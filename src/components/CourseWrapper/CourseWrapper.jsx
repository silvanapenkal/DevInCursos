import "./CourseWrapper.css";

function CourseWrapper({ children }) {
  return <main className="courseWrapperContainer">{children}</main>;
}

export default CourseWrapper;