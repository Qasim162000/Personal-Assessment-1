import React, { useState } from "react";
// import { TableData } from "./TableData";
// import { TableHeader } from "./TableHeader";

interface TableEntryProps {
  firstname: any;
  lastname: any;
  email: any;
  salary: any;
  date: any;
  mykey: any;
}

export const TableEntry: React.FC<TableEntryProps> = (props) => {
  const [entry, setEntry] = useState({
    firstname: "Qasim",
    lastname: "Daud",
    email: "q@gmail.com",
    salary: "45000",
    date: "12/24/22",
  });

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-4">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Salary
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 text-center py-4">
                    Actions
                  </th>
                </tr>
              </thead>
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
                    <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
