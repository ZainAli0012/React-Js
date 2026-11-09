import React from 'react'

import SectionHeading from "./SectionHeading";
import Panel from "./Panel";

const ShortlistSection = ({
  employees,
  onRemove,
  children
}) => {
  return (
    <section className="mt-10">
      <SectionHeading
        title="Employee Shortlist"
        subtitle="Your selected employees appear here."
      />

      <Panel title="Shortlisted Employees">
        {employees.length === 0 ? (
          <p className="text-sm text-slate-500">
            No employees shortlisted yet.
          </p>
        ) : (
          <div className="space-y-3">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-3"
              >
                <div>
                  <p className="font-semibold text-[#142F40]">
                    {employee.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {employee.role}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(employee.id)}
                  className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700 hover:bg-red-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {children}
      </Panel>
    </section>
  );
};

export default ShortlistSection;
