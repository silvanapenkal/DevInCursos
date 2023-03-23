import { createContext, useContext } from "react";

const DevinCourseContext = createContext([]);

export default DevinCourseContext;

export function useDevinCourseContext() {
  return useContext(DevinCourseContext);
}

export function useUserName() {
  const [user] = useDevinCourseContext();
  return user?.user?.name;
}

export function useUserIsAdmin() {
  const [user] = useDevinCourseContext();
  return user?.user?.isAdmin;
}

export function useSetUserInfo(){
  const [, setState]= useDevinCourseContext();
  return (userInfo) => {
    setState((currentState) => {
      return { ...currentState, user: userInfo };
    });
  };
}