import { createContext } from "react";

export const MyContext = createContext();

export const store = {
  value: {
    role: "",
    id: "",
    name: "",
  },
  setUserRole(role) {
    this.value.role = role;
  },
  setId(id) {
    this.value.id = id;
  },
  setName(name) {
    this.value.name = name;
  },
};
