const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Patient = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  dob: {
    type: String
  },
  address: {
    type: String
  }
},{
    collection: 'patients'
});

module.exports = mongoose.model('Patient', Patient);