const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Record = new Schema({
  patient_id: {
  type: mongoose.Schema.Types.ObjectId
  },
  blood_pressure: {
    type: String
  },
  respiratory_rate: {
    type: String
  },
  blood_oxygen: {
    type: String
  },
  heart_rate: {
    type: String
  }
},{
    collection: 'records'
});

module.exports = mongoose.model('Record', Record);