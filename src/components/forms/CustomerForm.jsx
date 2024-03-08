import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomerByUserId } from "../../services/CustomerService.jsx";
import "./Form.css";
export const CustomerForm = ({ currentUser }) => {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCustomerByUserId(currentUser.id).then((data) => {
      const customerObj = data[0];
      setCustomer(customerObj);
    });
  }, [currentUser]);

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset className="form-group">
        <div className="form-group">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={customer?.user?.fullName ? customer.user.fullName : ""}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Address:</label>
          <input
            name="address"
            type="text"
            value={customer?.address ? customer.address : ""}
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            name="phone-number"
            type="text"
            value={customer?.phoneNumber ? customer.phoneNumber : ""}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary">Save Profile</button>
        </div>
      </fieldset>
    </form>
  );
};
