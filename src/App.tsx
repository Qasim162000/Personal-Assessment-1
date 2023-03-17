import React from "react";

import { EmployeeForm } from "./components/EmployeeForm";
import { Navbar } from "./components/Navbar";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <Navbar />
      <EmployeeForm />
    </>
  );
};
