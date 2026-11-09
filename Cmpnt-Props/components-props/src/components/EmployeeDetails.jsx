import React from 'react'

const EmployeeDetails = ({ employee, onClose }) => {
  if (!employee) {
    return null;
  }

  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-[#142F40]">
          {employee.name}
        </h3>

        <button
          onClick={onClose}
          className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-200"
        >
          Close
        </button>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Location:</strong> {employee.location}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Experience:</strong> {employee.experienceYears} years</p>
        <p>
          <strong>Skills:</strong> {employee.skills.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
