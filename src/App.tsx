import React from "react";
import { AddEmployee } from "./components/AddEmployee";
import { Navbar } from "./components/Navbar";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <Navbar />
      <AddEmployee />
    </>
  );
};
