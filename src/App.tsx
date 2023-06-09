import React from "react";
import { EntryState } from "./components/context/EntryState";

import { EmployeeForm } from "./components/EmployeeForm";
import { Navbar } from "./components/Navbar";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <EntryState>
      <Navbar />
      <h1 className="text-black font-bold text-4xl text-center mt-14 mb-6">
        Enter an Employee Information in the Record
      </h1>
      <EmployeeForm />
    </EntryState>
  );
};
