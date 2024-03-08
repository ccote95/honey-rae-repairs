export const getAllTickets = () => {
  return fetch(
    "http://localhost:8088/serviceTickets?_embed=employeeTickets"
  ).then((res) => res.json());
};

export const assignTicket = (employeeTicket) => {
  return fetch(`http://localhost:8088/employeeTickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeTicket),
  });
};

export const upDateTicket = (ticket) => {
  return fetch(
    `http://localhost:8088/serviceTickets/${ticket.id}
  `,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    }
  );
};

export const deleteTicket = (ticketId) => {
  return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
    method: "DELETE",
  });
};

export const createTicket = (ticket) => {
  return fetch("http://localhost:8088/serviceTickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
};

export const getTicketById = (ticketId) => {
  return fetch(`http://localhost:8088/serviceTickets/${ticketId}`).then((res) =>
    res.json()
  );
};
