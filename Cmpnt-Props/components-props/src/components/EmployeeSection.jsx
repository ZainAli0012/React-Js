import React from 'react'
import SectionHeading from "./SectionHeading";
import EmployeeGrid from "./EmployeeGrid";

const EmployeeSection = ({ employees, onViewDetails }) => {
  return (
    <section>
      <SectionHeading
        title="Our Employees"
        subtitle="Browse employees and view their professional details."
      />

      <EmployeeGrid
        employees={employees}
        onViewDetails={onViewDetails}
      />
    </section>
  );
};

export default EmployeeSection;
