
const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,  
        required: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

// Ensure unique index is created
personSchema.index({ email: 1 }, { unique: true });

// Create the model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
