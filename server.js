const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const PatientRoute = require('./routes/PatientRoute');
  


    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://tac:tac123580@ds047335.mlab.com:47335/clinic-data").then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/patient', PatientRoute);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });

