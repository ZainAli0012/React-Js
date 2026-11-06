
import { useState } from "react";
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/Home";
import { employeesData } from "./data/data.jsx";

const App = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [shortlistedEmployees, setShortlistedEmployees] = useState([]);

  const handleViewDetails = (id) => {
    const employee = employeesData.find(
      (employee) => employee.id === id
    );

    setSelectedEmployee(employee || null);
  };

  const handleCloseDetails = () => {
    setSelectedEmployee(null);
  };

  const handleAddToShortlist = (employee) => {
    setShortlistedEmployees((previous) => {
      if (previous.some((item) => item.id === employee.id)) {
        return previous;
      }

      return [...previous, employee];
    });
  };

  const handleRemoveFromShortlist = (id) => {
    setShortlistedEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  };

  return (
    <WebLayout>
      <Home
        employees={employeesData}
        search={search}
        setSearch={setSearch}
        onViewDetails={handleViewDetails}
        selectedEmployee={selectedEmployee}
        onCloseDetails={handleCloseDetails}
        shortlistedEmployees={shortlistedEmployees}
        onAddToShortlist={handleAddToShortlist}
        onRemoveFromShortlist={handleRemoveFromShortlist}
      />
    </WebLayout>
  );
};

export default App;
