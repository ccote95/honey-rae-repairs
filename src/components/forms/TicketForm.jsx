import { useEffect, useState } from "react";
import "./Form.css";
import {
  createTicket,
  getTicketById,
  upDateTicket,
} from "../../services/ticketService.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const TicketForm = ({ currentUser }) => {
  const [ticket, setTicket] = useState({
    description: "",
    emergency: false,
  });
  const navigate = useNavigate();
  const { ticketId } = useParams();

  useEffect(() => {
    if (ticketId) {
      getTicketById(ticketId).then((ticketObj) => {
        setTicket(ticketObj);
      });
    }
  }, []);

  const handleSave = (event) => {
    event.preventDefault();
    if (ticketId && ticket.description) {
      const updatedTicket = { ...ticket };
      upDateTicket(updatedTicket).then(() => {
        navigate("/tickets");
      });
    } else if (ticket.description) {
      const newTicketObject = {
        userId: currentUser.id,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: "",
      };
      createTicket(newTicketObject).then(() => {
        navigate("/tickets");
      });
    } else {
      window.alert("Please fill out the description");
    }
  };

  return (
    <form>
      <h2>New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={ticket.description}
            className="form-control"
            placeholder="Brief description of the problem"
            onChange={(event) => {
              const ticketCopy = { ...ticket };
              ticketCopy.description = event.target.value;
              setTicket(ticketCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>
            Emergency
            <input
              type="checkbox"
              checked={
                ticketId ? ticket.emergency : false
              } /** this is checking if ticketId exists. if it does  */
              onChange={(event) => {
                const ticketCopy = { ...ticket };
                ticketCopy.emergency = event.target.checked;
                setTicket(ticketCopy);
              }}
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info" onClick={handleSave}>
            Submit Ticket
          </button>
        </div>
      </fieldset>
    </form>
  );
};
