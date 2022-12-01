const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    is_Published: {
        type: Boolean,
        default: true
    },
    slug: {
        type: String,
        slug: "name",
        unique: true
    }
})

module.exports = mongoose.model('Event',eventSchema);