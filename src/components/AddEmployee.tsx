import React from "react";
import { EmployeeForm } from "./EmployeeForm";
// import { TableEntry } from "./TableEntry";

interface AddEmployeeProps {}

export const AddEmployee: React.FC<AddEmployeeProps> = ({}) => {
  return (
    <>
      <EmployeeForm />
      {/* <TableEntry /> */}
    </>
  );
};
