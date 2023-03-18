import React, { useContext, useRef, useState } from "react";
import EntryContext from "./context/EntryContext";
import { TableBody } from "./TableBody";

interface EmployeeFormProps {}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({}) => {
  const ref = useRef<any>(null);
  const refClose = useRef<any>(null);

  const updateEntry = (currentEntry: any) => {
    ref.current.click();
  };

  const { entries, setEntries } = useContext(EntryContext);
  const [details, setDetails] = useState({
    indexing: "",
    firstname: "",
    lastname: "",
    email: "",
    salary: "",
    date: "",
    secretKey: "",
  });

  const handleOnSubmit = (Event: any) => {
    Event.preventDefault();
    setEntries(entries.concat(details));
    setDetails({
      indexing: "",
      firstname: "",
      lastname: "",
      email: "",
      salary: "",
      date: "",
      secretKey: "",
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
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{ display: "none" }}
        type="button"
        ref={ref}
      >
        Toggle modal
      </button>

      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div className="w-full max-w-xs mx-auto my-5 rounded-full">
          <h1 className="text-center text-3xl font-bold mb-6 text-white">
            Edit Employee Information
          </h1>
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
            <div className="flex items-center">
              <button
                className="mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
              <button
                className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>

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
      {entries.length === 0 ? (
        <h1 className="text-center text-3xl font-bold mt-6">
          No Entries in the Table
        </h1>
      ) : (
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
                  {entries.map((entry: any, index: any) => {
                    return (
                      <TableBody
                        indexing={index + 1}
                        secretKey={entry.email}
                        key={index}
                        firstname={entry.firstname}
                        lastname={entry.lastname}
                        email={entry.email}
                        salary={entry.salary}
                        date={entry.date}
                        updateEntry={updateEntry}
                        entry={entry}
                      />
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
