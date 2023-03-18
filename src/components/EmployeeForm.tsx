import React, { useContext, useRef, useState } from "react";
import { AddEmployeeForm } from "./AddEmployeeForm";
import EntryContext from "./context/EntryContext";
import { TableBody } from "./TableBody";

interface EmployeeFormProps {}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({}) => {
  const { entries, editEntry } = useContext(EntryContext);
  const ref = useRef<any>(null);
  const [details, setDetails] = useState({
    eindexing: "",
    efirstname: "",
    elastname: "",
    eemail: "",
    esalary: "",
    edate: "",
    esecretKey: "",
  });

  const handleOnSubmit = (Event: any) => {
    Event.preventDefault();
    editEntry(
      details.efirstname,
      details.elastname,
      details.eemail,
      details.esalary,
      details.edate
    );
    ref.current.click();

    alert("Employee Details Edited Successfully");
  };

  const updateEntry = (currentEntry: any) => {
    ref.current.click();
    setDetails({
      eindexing: currentEntry.indexing,
      efirstname: currentEntry.firstname,
      elastname: currentEntry.lastname,
      eemail: currentEntry.email,
      esalary: currentEntry.salary,
      edate: currentEntry.date,
      esecretKey: currentEntry.secreyKey,
    });
  };

  const onChange = (Event: any) => {
    setDetails({
      ...details,
      [Event.target.name]: Event.target.value,
    });
  };

  return (
    <>
      <AddEmployeeForm />
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
                htmlFor="efirstname"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="efirstname"
                name="efirstname"
                value={details.efirstname}
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
                id="elastname"
                name="elastname"
                type="text"
                value={details.elastname}
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
                name="eemail"
                type="email"
                placeholder="xyz@gmail.com"
                value={details.eemail}
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
                id="esalary"
                name="esalary"
                value={details.esalary}
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
                id="edate"
                name="edate"
                type="date"
                value={details.edate}
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
                data-modal-toggle="defaultModal"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
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
