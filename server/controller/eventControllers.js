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
            res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while create operation"
            });
        });
}

//retrieve and return all Events/ retrieve and return an Event
exports.findEvent = (req,res) => {

    if(req.query.id){
        const id = req.query.id;

        Event.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: `Event with id ${id} not found`})
                }
                else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: `Error retrieving event with id ${id}`})
            })
    }
    else{
        Event.find()
        .then(event => {
            res.send(event)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occured while retrieving event information"})
        })
    }
}

//Update an event by event id
exports.updateEvent = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty" })
    }

    const id = req.params.id;

    Event.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot update event with ${id}.Maybe event not found!`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Error updating event information."})
        })
}

//Delete an event with specified event id
exports.deleteEvent = (req,res)=> {
    const id = req.params.id;

    Event.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:`Cannot delete event with ${id}.Maybe id is wrong`})
            }
            else{
                res.send({message: "Event was deleted successfully."})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Event with ${id}.`
            })
        })
}