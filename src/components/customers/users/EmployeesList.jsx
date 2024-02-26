import { useEffect, useState } from "react";
import { getAllEmployees } from "../../../services/employeeService.jsx";
import { User } from "./User.jsx";
import "./Employees.css";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => {
        console.log(employee.user);
        return <User user={employee.user} key={employee.user.id} />;
      })}
    </div>
  );
};
