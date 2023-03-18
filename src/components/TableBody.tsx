import React, { useContext, useRef } from "react";
import EntryContext from "./context/EntryContext";

interface TableBodyProps {
  indexing?: any;
  firstname?: any;
  lastname?: any;
  email?: any;
  salary?: any;
  date?: any;
  secretKey?: any;
}

export const TableBody: React.FC<TableBodyProps> = (props) => {
  // const first = useRef(null)
  const { deleteEntry, editEntry } = useContext(EntryContext);

  return (
    <>
      <tbody>
        <tr className="dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            {props.indexing}
          </td>
          <td className="font-normal whitespace-nowrap px-6 py-4">
            {props.firstname}
          </td>
          <td className="font-normal whitespace-nowrap px-6 py-4">
            {props.lastname}
          </td>
          <td className="font-normal whitespace-nowrap px-6 py-4">
            {props.email}
          </td>
          <td className="font-normal whitespace-nowrap px-6 py-4">
            ${props.salary}
          </td>
          <td className="font-normal whitespace-nowrap px-6 py-4">
            {props.date}
          </td>
          <td className="font-normal whitespace-nowrap px-6 py-4 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => {
                editEntry(
                  props.firstname,
                  props.lastname,
                  props.email,
                  props.salary,
                  props.date
                );
              }}
            >
              Edit
            </button>{" "}
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              onClick={() => {
                deleteEntry(props.secretKey);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};
