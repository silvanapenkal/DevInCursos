import { createContext, useContext } from "react";

const DevinCourseContext = createContext([]);

export default DevinCourseContext;

export function useDevinCourseContext() {
  return useContext(DevinCourseContext);
}

export function useUserName() {
  const [user, setUser] = useDevinCourseContext();
  return user?.user?.name;
}


// export function useSetUserInfo() {
//   const [value, setValue] = useDevinCourseContext();
//   return setValue;
// }