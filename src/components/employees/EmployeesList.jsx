import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/EmployeeService.jsx";
import { User } from "../customers/users/User.jsx";
import "./Employees.css";
import { Link } from "react-router-dom";

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
        return (
          <Link to={`/employees/${employee.userId}`} key={employee.user.id}>
            <User user={employee.user} />;
          </Link>
        );
      })}
    </div>
  );
};
