import React from "react";

interface TableBodyProps {
  mykey?: any;
  firstname?: any;
  lastname?: any;
  email?: any;
  salary?: any;
  date?: any;
}

export const TableBody: React.FC<TableBodyProps> = (props) => {
  return (
    <tbody>
      <tr className="dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {props.mykey}
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
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Edit
          </button>{" "}
          <button
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            // onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};
