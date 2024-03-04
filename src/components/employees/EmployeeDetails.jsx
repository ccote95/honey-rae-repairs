import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/EmployeeService.jsx";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(parseInt(employeeId)).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);
  console.log(employee);
  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate : </span>
        {employee.rate}
      </div>
      <div>
        <span>
          Currently working on {employee.employeeTickets?.length} tickets
        </span>
      </div>
    </section>
  );
};
