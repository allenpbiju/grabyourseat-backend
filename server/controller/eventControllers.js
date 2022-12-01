const Event = require('../model/Event')

//create and save a new Event
exports.createEvent = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"})
        return;
    }

    //new event
    const event = new Event({
        name: req.body.name,
        description: req.body.description,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        is_Published: req.body.is_Published
    })

    //save Event in database

    event
        .save(event)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while create operation"
            });
        });
}

//retrieve and return all Events/ retrieve and return an Event
exports.findEvent = (req,res) => {
    Event.find()
    .then(event => {
        res.send(event)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occured while retrieving event information"})
    })
}

//Update an event by event id
exports.updateEvent = (req,res) => {

}

//Delete an event with specified event id
exports.deleteEvent = (req,res)=> {

}