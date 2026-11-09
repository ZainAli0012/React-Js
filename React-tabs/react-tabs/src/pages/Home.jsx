
import React, { useState } from 'react'
import { employeesData } from '../Store/useData'

const Home = () => {
  const [activeDepartment, setActiveDepartment] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [shortlist, setShortlist] = useState([])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const filteredEmployees = employeesData.filter((employee) => {
    const matchesDepartment =
      activeDepartment === 'All' ||
      employee.department === activeDepartment

    const query = searchQuery.trim().toLowerCase()

    const matchesSearch =
      employee.name.toLowerCase().includes(query) ||
      employee.role.toLowerCase().includes(query)

    return matchesDepartment && matchesSearch
  })

  const addToShortlist = (employee) => {
    setShortlist((previous) =>
      previous.some((item) => item.id === employee.id)
        ? previous
        : [...previous, employee]
    )
  }

  const removeFromShortlist = (id) => {
    setShortlist((previous) =>
      previous.filter((employee) => employee.id !== id)
    )
  }

  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-800">
      <section
        id="home"
        className="scroll-mt-24 bg-sky-50 px-6 py-16"
      >
        <h1 className="text-3xl font-bold">Welcome to EmployeeHub</h1>

        <p className="mt-3 max-w-xl text-gray-600">
          Find employees, view their details and shortlist the employees
          you want to keep track of.
        </p>

        <button
          type="button"
          onClick={() => scrollToSection('employees')}
          className="mt-5 rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
        >
          Browse Employees
        </button>
      </section>

      <section
        id="employees"
        className="scroll-mt-24 px-6 py-10"
      >
        <h2 className="mb-5 text-2xl font-bold">Employees</h2>

        <label htmlFor="employee-search" className="mb-2 block">
          Search employees
        </label>

        <input
          id="employee-search"
          type="text"
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value)
            setSelectedEmployee(null)
          }}
          placeholder="Search by name or role..."
          className="mb-5 w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-blue-600"
        />

        <div className="mb-5 flex flex-wrap gap-3">
          {['All', 'Accounts', 'Production', 'IT'].map((department) => (
            <button
              key={department}
              type="button"
              aria-pressed={activeDepartment === department}
              onClick={() => {
                setActiveDepartment(department)
                setSelectedEmployee(null)
              }}
              className={`rounded-md px-4 py-2 ${
                activeDepartment === department
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        <p className="mb-5 text-sm text-gray-600">
          Showing {filteredEmployees.length} of {employeesData.length} employees
        </p>

        {filteredEmployees.length === 0 ? (
          <p>No employees found. Try another search.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="rounded-xl bg-sky-50 p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{employee.name}</h3>

                <p className="mt-2 text-sm text-gray-600">
                  ID: {employee.id}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedEmployee(
                      selectedEmployee?.id === employee.id ? null : employee
                    )
                  }
                  className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  {selectedEmployee?.id === employee.id
                    ? 'Close Details'
                    : 'View Details'}
                </button>

                {selectedEmployee?.id === employee.id && (
                  <div className="mt-4 rounded-lg bg-white p-4">
                    <h4 className="font-semibold">Employee Details</h4>

                    <p className="mt-2 break-all text-sm">
                      Email: {employee.email}
                    </p>

                    <p className="mt-2 text-sm">
                      Department: {employee.department}
                    </p>

                    <p className="mt-2 text-sm">
                      Role: {employee.role}
                    </p>

                    <p className="mt-2 text-sm">
                      Experience: {employee.experience}
                    </p>

                    <button
                      type="button"
                      onClick={() => addToShortlist(employee)}
                      disabled={shortlist.some(
                        (item) => item.id === employee.id
                      )}
                      className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:bg-gray-400"
                    >
                      {shortlist.some((item) => item.id === employee.id)
                        ? 'Already Shortlisted'
                        : 'Add to Shortlist'}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section
        id="shortlisted"
        className="scroll-mt-24 bg-gray-50 px-6 py-10"
      >
        <h2 className="mb-5 text-2xl font-bold">
          Shortlisted Employees ({shortlist.length})
        </h2>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          {shortlist.length === 0 ? (
            <p className="text-gray-600">
              No employees shortlisted yet.
            </p>
          ) : (
            <div className="space-y-4">
              {shortlist.map((employee) => (
                <div
                  key={employee.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-sky-50 p-4"
                >
                  <div>
                    <h3 className="font-semibold">{employee.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      ID: {employee.id}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {employee.role}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromShortlist(employee.id)}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    Close
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 bg-sky-50 px-6 py-10"
      >
        <h2 className="mb-3 text-2xl font-bold">About EmployeeHub</h2>

        <p className="max-w-2xl text-gray-600">
          EmployeeHub is a simple employee directory where you can search
          employees, filter by department, view employee information and
          manage your shortlist.
        </p>

        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="mt-5 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Back to Home
        </button>
      </section>
    </div>
  )
}

export default Home
