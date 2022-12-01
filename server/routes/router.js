const express = require('express')
const route = express.Router()

const services = require('../services/render');
const eventController = require('../controller/eventControllers') 

/**
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRoutes)

/**
 * @description add Events
 * @method GET /add-event
 */
route.get('/add-event',services.addEvent)

/**
 * @description allot Tickets
 * @method GET /allot-tickets
 */
route.get('/allot-tickets',services.allotTickets)

/**
 * @description view Ticket Status
 * @method GET /ticket-status
 */
route.get('/ticket-status',services.ticketStatus)

/**
 * @description edit Event
 * @method GET /edit-event
 */
route.get('/edit-event',services.editEvent)

/**
 * @description edit Ticket Slots
 * @method GET /edit-tickets
 */
route.get('/edit-tickets',services.editTicket)

//API 
route.post('/api/events',eventController.createEvent)
route.get('/api/events',eventController.findEvent)
route.put('/api/events/:id',eventController.updateEvent)
route.delete('/api/events/:id',eventController.deleteEvent)

module.exports = route