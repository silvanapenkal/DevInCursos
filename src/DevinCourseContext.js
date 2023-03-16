import { createContext, useContext } from "react";

const DevinCourseContext = createContext([]);

export default DevinCourseContext;

export function useDevinCourseContext() {
  return useContext(DevinCourseContext);
}

// export function useUserInfo() {
//   const [value] = useDevinCourseContext();
//   return value;
// }

// export function useSetUserInfo() {
//   const [value, setValue] = useDevinCourseContext();
//   return setValue;
// }