import React from 'react'

const EmployeeCard = ({ employee, onViewDetails }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-[#142F40]">
            {employee.name}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {employee.role}
          </p>
        </div>
        <span className="rounded bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-700">
          {employee.id}
        </span>
      </div>

      <p className="text-sm">
        <span className="font-semibold">Department:</span>{" "}
        {employee.department}
      </p>

      <p className="mt-1 text-sm">
        <span className="font-semibold">Location:</span>{" "}
        {employee.location}
      </p>

      <p className="mt-1 text-sm">
        <span className="font-semibold">Experience:</span>{" "}
        {employee.experienceYears} years
      </p>

      <button
        onClick={() => onViewDetails(employee.id)}
        className="mt-4 w-full rounded-lg bg-[#142F40] px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
      >
        View Details
      </button>
    </div>
  );
};

export default EmployeeCard;
