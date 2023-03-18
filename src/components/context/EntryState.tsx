import React, { useState } from "react";
import EntryContext from "./EntryContext";

interface EntryStateProps {
  children: React.ReactNode;
}

export const EntryState: React.FC<EntryStateProps> = (props) => {
  const entry: any = [];
  const [entries, setEntries] = useState(entry);

  const deleteEntry = (id: any) => {
    const newEntries = entries.filter((entry: any) => {
      return entry.email !== id;
    });
    const newEntriesSet = setEntries(newEntries);
  };

  return (
    <EntryContext.Provider value={{ entries, setEntries, deleteEntry }}>
      {props.children}
    </EntryContext.Provider>
  );
};
