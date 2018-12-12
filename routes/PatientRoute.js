const express = require('express');
const app = express();
const PatientRoute = express.Router();

// Require AdUnit model in our routes module
let Patient = require('../models/Patient');

// Defined store route
PatientRoute.route('/add').post(function (req, res) {
  let patient = new Patient(req.body);
  patient.save()
    .then(game => {
    res.status(200).json({'patient': 'Patient is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
PatientRoute.route('/').get(function (req, res) {
    Patient.find(function (err, patient){
    if(err){
      console.log(err);
    }
    else {
      res.json(patient);
    }
  });
});

// Defined edit route
PatientRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Patient.findById(id, function (err, patient){
      res.json(patient);
  });
});

//  Defined update route
PatientRoute.route('/update/:id').post(function (req, res) {
    Patient.findById(req.params.id, function(err, patient) {
    if (!patient)
      return next(new Error('Could not load Document'));
    else {
        patient.first_name = req.body.first_name;
        patient.last_name = req.body.last_name;
        patient.dob = req.body.dob;
        patient.address = req.body.address;

        patient.save().then(patient => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
PatientRoute.route('/delete/:id').get(function (req, res) {
    Patient.findByIdAndRemove({_id: req.params.id}, function(err, patient){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


PatientRoute.route('/:id').get(function (req, res){
  Patient.findOne({_id: req.params.id}, function (err, patient){
    if(err){
      console.log(err);
    }
    else {
      res.json(patient);
    }
  })
});

module.exports = PatientRoute;