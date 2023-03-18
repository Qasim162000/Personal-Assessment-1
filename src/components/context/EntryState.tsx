import React, { useState } from "react";
import EntryContext from "./EntryContext";

interface EntryStateProps {
  children: React.ReactNode;
}

export const EntryState: React.FC<EntryStateProps> = (props) => {
  const entry: any = [];
  const [entries, setEntries] = useState(entry);

  //Edit Employee info on table
  const editEntry = (
    firstname: any,
    lastname: any,
    email: any,
    salary: any,
    date: any
  ) => {
    for (let index = 0; index < entries.length; index++) {
      const element = entries[index];
      if (element.email === email) {
        entries[index].firstname = firstname;
        entries[index].lastname = lastname;
        entries[index].email = email;
        entries[index].salary = salary;
        entries[index].date = date;
        break;
      }
      setEntries(entries);
    }
  };

  //Delete Employee info from table
  const deleteEntry = (id: any) => {
    const newEntries = entries.filter((entry: any) => {
      if (entry.email === id) {
        alert(`Employee ${entry.firstname} has been deleted successfully`);
      }
      return entry.email !== id;
    });
    setEntries(newEntries);
  };

  return (
    <EntryContext.Provider
      value={{ entries, setEntries, deleteEntry, editEntry }}
    >
      {props.children}
    </EntryContext.Provider>
  );
};
