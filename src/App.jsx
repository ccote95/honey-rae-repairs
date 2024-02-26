import "./App.css";
import { CustomerList } from "./components/customers/CustomersList.jsx";
import { EmployeesList } from "./components/customers/users/EmployeesList.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      {/* <CustomerList /> */}
      <EmployeesList />
    </>
  );
};
