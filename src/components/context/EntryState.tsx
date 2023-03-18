import React, { useState } from "react";
import EntryContext from "./EntryContext";

interface EntryStateProps {
  children: React.ReactNode;
}

export const EntryState: React.FC<EntryStateProps> = (props) => {
  const entry: any = [];
  const [entries, setEntries] = useState(entry);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {props.children}
    </EntryContext.Provider>
  );
};
