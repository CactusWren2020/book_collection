const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const BookSchema = new Schema(
    {
        title: {
            type: String,
            trim: true
        },
        author: {
            type: String,
            required: true
        },
        ISBN: {
            type: String,
            required: true
        }
    },
    { 
        collection: 'bookmodel',
        versionKey: false
    },
);

module.exports = connections.model('BookModel', BookSchema);