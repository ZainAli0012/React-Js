
import { Fragment, useState } from "react";

const Employees = ({ employees, onDelete }) => {
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you want to delete?"
    );

    if (!confirmed) return;

    onDelete(id);

    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  return (
    <div className="mt-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchQuery(searchText.trim());
        }}
        className="mb-6 flex w-full max-w-md gap-2"
      >
        <input
          type="text"
          placeholder="Search employees..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Name</th>
              <th className="border border-gray-300 px-4 py-3">Email</th>
              <th className="border border-gray-300 px-4 py-3">Employee Type</th>
              <th className="border border-gray-300 px-4 py-3">Department</th>
              <th className="border border-gray-300 px-4 py-3">Age</th>
              <th className="border border-gray-300 px-4 py-3">Salary</th>
              <th className="border border-gray-300 px-4 py-3">Executive</th>
              <th className="border border-gray-300 px-4 py-3">Gender</th>
              <th className="border border-gray-300 px-4 py-3">Detail</th>
              <th className="border border-gray-300 px-4 py-3">Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <Fragment key={employee.id}>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">{employee.name}</td>
                  <td className="border border-gray-300 px-4 py-3">{employee.email}</td>
                  <td className="border border-gray-300 px-4 py-3">{employee.employeeType}</td>
                  <td className="border border-gray-300 px-4 py-3">{employee.department}</td>
                  <td className="border border-gray-300 px-4 py-3">{employee.age}</td>
                  <td className="border border-gray-300 px-4 py-3">{employee.salary}</td>
                  <td className="border border-gray-300 px-4 py-3">{employee.executive}</td>
                  <td className="border border-gray-300 px-4 py-3">{employee.gender}</td>

                  <td className="border border-gray-300 px-4 py-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedId(
                          selectedId === employee.id
                            ? null
                            : employee.id
                        )
                      }
                      className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
                    >
                      {selectedId === employee.id ? "Hide" : "Show"}
                    </button>
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    <button
                      type="button"
                      onClick={() => handleDelete(employee.id)}
                      className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                {selectedId === employee.id && (
                  <tr>
                    <td
                      colSpan="10"
                      className="border border-gray-300 bg-gray-50 p-5"
                    >
                      <h3 className="mb-3 text-lg font-bold">
                        Employee Details
                      </h3>

                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <p><strong>ID:</strong> {employee.id}</p>
                        <p><strong>Name:</strong> {employee.name}</p>
                        <p><strong>Email:</strong> {employee.email}</p>
                        <p><strong>Employee Type:</strong> {employee.employeeType}</p>
                        <p><strong>Department:</strong> {employee.department}</p>
                        <p><strong>Age:</strong> {employee.age}</p>
                        <p><strong>Salary:</strong> {employee.salary}</p>
                        <p><strong>Executive:</strong> {employee.executive}</p>
                        <p><strong>Gender:</strong> {employee.gender}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
