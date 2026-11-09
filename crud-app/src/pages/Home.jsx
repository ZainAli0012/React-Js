
import { useState } from "react";
import { AllEmployees } from "../store/data";
import Employees from "../components/Employees";

const emptyEmployee = {
  name: "",
  email: "",
  employeeType: "Full Time",
  department: "IT",
  age: "",
  salary: "",
  executive: "No",
  gender: "Male",
};

const Home = () => {
  const [employees, setEmployees] = useState(AllEmployees);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ ...emptyEmployee });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    setFormData({ ...emptyEmployee });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const EmployeId =
      employees.reduce(
        (maximum, employee) =>
          Math.max(maximum, Number(employee.id) || 0),
        0
      ) + 1;

    const newEmployee = {
      id: EmployeId,
      ...formData,
      age: Number(formData.age),
      salary: Number(formData.salary),
    };

    setEmployees((previousEmployees) => [
      ...previousEmployees,
      newEmployee,
    ]);

    setShowForm(false);
    setFormData({ ...emptyEmployee });
  };

  const handleDelete = (id) => {
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-5 text-3xl font-bold text-gray-800">
        All Employees
      </h1>

      <button
        type="button"
        onClick={handleCreate}
        className="rounded-md bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
      >
        Employees
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="my-6 rounded-lg border border-gray-300 p-5"
        >
          <h2 className="mb-4 text-xl font-bold">
            Create Employee
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                required
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block">Employee Type</label>
              <select
                name="employeeType"
                value={formData.employeeType}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                
              </select>
            </div>

            <div>
              <label className="mb-1 block">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
              >
                <option>IT</option>
                <option>Accounts</option>
                <option>Production</option>
                
              </select>
            </div>

            <div>
              <label className="mb-1 block">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter age"
                min="1"
                required
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block">Salary</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="Enter salary"
                min="0"
                required
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block">Executive</label>
              <select
                name="executive"
                value={formData.executive}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
              >
                <option>Male</option>
                <option>Female</option>
      
              </select>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <button
              type="submit"
              className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              Add Employee
            </button>

            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setFormData({ ...emptyEmployee });
              }}
              className="rounded bg-gray-500 px-5 py-2 text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <Employees
        employees={employees}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
