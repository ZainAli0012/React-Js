import React from 'react'

import EmployeeCard from "./EmployeeCard";

const EmployeeGrid = ({ employees, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default EmployeeGrid;
