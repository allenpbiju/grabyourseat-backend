const axios = require('axios')
const { response } = require('express')

exports.homeRoutes = (req,res) => {
    //make a get request to /api/events
    axios.get('http://localhost:3000/api/events')
        .then(function(response){
            res.render('index',{events: response.data})
        })
        .catch(err=>{
            res.send(err)
        })
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
    axios.get("http://localhost:3000/api/events",{params: {id: req.query.id}})
        .then(function(eventdata){
            res.render('update_event',{event: eventdata.data})
        })
        .catch(err => {
            res.send(err);
        })
}

exports.editTicket = (req,res) => {
    res.render("update_tickets");
}