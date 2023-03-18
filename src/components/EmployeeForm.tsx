import React, { useState } from "react";
import { TableEntry } from "./TableEntry";

interface EmployeeFormProps {}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({}) => {
  const entry: any = [];
  const [entries, setEntries] = useState(entry);

  const [details, setDetails] = useState({
    mykey: "",
    firstname: "",
    lastname: "",
    email: "",
    salary: "",
    date: "",
  });

  const handleOnSubmit = (Event: any) => {
    Event.preventDefault();
    setEntries(entries.concat(details));
    // console.log(details);
    // console.log(entry);
    setDetails({
      mykey: "",
      firstname: "",
      lastname: "",
      email: "",
      salary: "",
      date: "",
    });
    alert("Employee Added Successfully");
  };

  const onChange = (Event: any) => {
    setDetails({
      ...details,
      [Event.target.name]: Event.target.value,
    });
  };

  return (
    <>
      <div className="w-full max-w-xs mx-auto my-5 rounded-full">
        <form
          className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleOnSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm text-white font-bold mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              name="firstname"
              value={details.firstname}
              type="text"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm text-white font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              name="lastname"
              type="text"
              value={details.lastname}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm text-white font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="xyz@gmail.com"
              value={details.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm text-white font-bold mb-2"
              htmlFor="salary"
            >
              Salary
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="salary"
              name="salary"
              value={details.salary}
              type="text"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              name="date"
              type="date"
              value={details.date}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
      {entries.map((entry: any, index: any) => {
        return (
          <TableEntry
            key={index}
            mykey={index}
            firstname={entry.firstname}
            lastname={entry.lastname}
            email={entry.email}
            salary={entry.salary}
            date={entry.date}
          />
        );
      })}
    </>
  );
};
