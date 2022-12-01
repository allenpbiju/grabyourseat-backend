exports.homeRoutes = (req,res) => {
    res.render("index");
} 

exports.addEvent = (req,res) => { 
    res.render("add_event");
}

exports.allotTickets = (req,res) => {
    res.render("add_tickets");
}

exports.ticketStatus = (req,res) => {
    res.render("ticket_status");
}

exports.editEvent = (req,res) => {
    res.render("update_event");
}

exports.editTicket = (req,res) => {
    res.render("update_tickets");
}