import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { TicketList } from "../components/tickets/TicketList.jsx";
import { EmployeesList } from "../components/employees/EmployeesList.jsx";
import { EmployeeDetails } from "../components/employees/EmployeeDetails.jsx";
import { CustomerList } from "../components/customers/CustomersList.jsx";
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx";
import { EmployeeForm } from "../components/forms/EmployeeForm.jsx";
import { NavBar } from "../components/nav/NavBar.jsx";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />

            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="employees">
          <Route index element={<EmployeesList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
