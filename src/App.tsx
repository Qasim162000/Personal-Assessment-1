import React from "react";
import { EntryState } from "./components/context/EntryState";

import { EmployeeForm } from "./components/EmployeeForm";
import { Navbar } from "./components/Navbar";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <EntryState>
      <Navbar />
      <EmployeeForm />
    </EntryState>
  );
};
