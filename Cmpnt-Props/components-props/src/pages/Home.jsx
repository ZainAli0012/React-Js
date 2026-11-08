import React from 'react'
import SectionHeading from "../components/SectionHeading";
import EmployeeSection from "../components/EmployeeSection";
import EmployeeDetails from "../components/EmployeeDetails";
import ShortlistSection from "../components/ShortlistSection";
import Panel from "../components/Panel";

const Home = ({
  employees,
  search,
  setSearch,
  onViewDetails,
  selectedEmployee,
  onCloseDetails,
  shortlistedEmployees,
  onAddToShortlist,
  onRemoveFromShortlist
}) => {
  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.department} ${employee.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8 rounded-xl bg-[#142F40] p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-200">
          React Practical Project
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          Components and Props
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Build reusable components before adding the shared store.
        </p>
      </div>

      <div className="mb-8">
        <SectionHeading
          title="Find Employees"
          subtitle="Search by employee name, department or role."
        />

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search employees..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-600 md:max-w-md"
        />
      </div>

      <EmployeeSection
        employees={filteredEmployees}
        onViewDetails={onViewDetails}
      />

      <div className="mt-8">
        <Panel title="Selected Employee Details">
          {selectedEmployee ? (
            <div>
              <EmployeeDetails
                employee={selectedEmployee}
                onClose={onCloseDetails}
              />

              <button
                onClick={() => onAddToShortlist(selectedEmployee)}
                disabled={shortlistedEmployees.some(
                  (employee) => employee.id === selectedEmployee.id
                )}
                className="mt-4 rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {shortlistedEmployees.some(
                  (employee) => employee.id === selectedEmployee.id
                )
                  ? "Already Shortlisted"
                  : "Add to Shortlist"}
              </button>
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              Select an employee to view details.
            </p>
          )}
        </Panel>
      </div>

      <ShortlistSection
        employees={shortlistedEmployees}
        onRemove={onRemoveFromShortlist}
      >
        <p className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500">
          Shortlisted employees are managed through props.
        </p>
      </ShortlistSection>
    </div>
  );
};

export default Home;
