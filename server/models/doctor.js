const mongoose = require('mongoose');

const Procedure = require('./procedure');
const User = require('/user');
const Calendar = require('./calendar');
const Insurance = require('./insurance');
const Location = require('./location');

const doctorSchema = new Schema ({

    doctorId: Number,
    firstName: String,
    lastName: String,
    procedures: [{ type: Schema.Types.ObjectId, ref: 'Procedure'}],
    patientList: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    practiceName: String,
    calendar: [{ type: Schema.Types.ObjectId, ref: 'Calendar'}],
    specialty: String,
    acceptedInsurance: [{ type: Schema.Types.ObjectId, ref: 'Insurance'}],
    location: { type: Schema.Types.ObjectId, ref: 'Location'},
    picture: String
});

module.exports = mongoose.model('Doctor', doctorSchema);