import { createContext } from "react";

export const MyContext = createContext();

export const store = {
  value: {
    role: "",
  },
  setUserRole(role) {
    this.value.role = role;
  },
};
