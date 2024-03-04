import { useEffect, useState } from "react";
import "./Form.css";
import { getEmployeeByUserId } from "../../services/EmployeeService.jsx";

export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeeByUserId(currentUser.id).then((data) => {
      const empolyeeObj = data[0];
      setEmployee(empolyeeObj);
    });
  }, [currentUser]);

  const handleSave = (event) => {
    event.preventDefault();
    console.log("clicked");

    const editedEmployee = {
      id: employee.id,
      specialty: employee.specialty,
      rate: employee.rate,
      userId: employee.userId,
    };
  };

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty:</label>
          <input
            type="text"
            value={employee.specialty}
            onChange={(event) => {
              const copy = { ...employee };
              copy.specialty = event.target.value;
              setEmployee(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate:</label>
          <input
            type="number"
            value={employee.rate}
            onChange={(event) => {
              const copy = { ...employee };
              copy.rate = event.target.value;
              setEmployee(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>
            Save Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
};
