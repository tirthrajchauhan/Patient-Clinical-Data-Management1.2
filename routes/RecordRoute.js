const express = require('express');
const app = express();
const RecordRoute = express.Router();

// Require AdUnit model in our routes module
let Record = require('../models/Record');
let Patient = require('../models/Patient');
// Defined store route
RecordRoute.route('/:id/add').post(function (req, res,next) {
      var newRecord = new Record({
        patient_id: req.body.patient_id, 
        blood_pressure: req.body.blood_pressure,
        heart_rate: req.body.heart_rate,
        respiratory_rate: req.body.respiratory_rate,
        blood_oxygen: req.body.blood_oxygen
      });
      Patient.findById({ _id: req.params.id }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!patient) {
            console.log(`->No Patient with ID [${req.params.id}] found`);
            res.status(404).json({ success: false, msg: "No Patient Found" })
        }
        else {
            // Create the patient and saving to db
            newRecord.save(function (error, result) {
                // If there are any errors, pass them to next in the correct format
                if (error) console.log (error)
                // Send the patient if no issues
                res.send(201, result)})
            }
})
});

// Defined get data(index or listing) route
RecordRoute.route('/:id/').get(function (req, res,next) {
       Patient.findById({ _id: req.params.id }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!patient) {
            console.log(`->No patient with ID [${req.params.id}] found`);
           // res.status(404).json({ success: false, msg: "No Patient Found" })
        }
        else {
          Record.find({patient_id: req.params.id}).exec(function (error, record) {
            // If there are any errors, pass them to next in the correct format
            if (error) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)))
            if (record) {
              // Send the record if no issues
              res.send(record)
            } else {
              // Send 404 header if the record doesn't exist
              res.send(404)
            }
          })
        }
    })
});

// Defined edit route
RecordRoute.route('/:id/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Record.findById(id, function (err, record){
      res.json(record);
  });
});

//  Defined update route
RecordRoute.route('/:id/update/:id').post(function (req, res,next) {
    Record.findById({patient_id: req.params.id},function(err, record) {
    if (!record)
      return next(new Error('Could not load Document'));
    else {
        record.blood_pressure = req.body.blood_pressure;
        record.respiratory_rate = req.body.respiratory_rate;
        record.bol = req.body.bol;
        record.hbr = req.body.hbr;

        record.save().then(record => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
RecordRoute.route('/:id/delete/:id').get(function (req, res) {
    Record.findByIdAndRemove({patient_id: req.params.id}, function(err, record){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = RecordRoute;