const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const PatientRoute = require('./routes/PatientRoute');
   
    const RecordRoute = require('./routes/RecordRoute');
  
    //const port = process.env.PORT || 4000;

    mongoose.Promise = global.Promise;
     mongoose.connect("mongodb://tac:tac123580@ds047335.mlab.com:47335/clinic-data").then(
      //mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
  

    app.use('/patient', PatientRoute);
    app.use('/record', RecordRoute);

    // const server = app.listen(port, function(){
    //  console.log('Listening on port ' + port);
    // });

    app.use(express.static(path.join(__dirname, 'public')));


    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/index.html'));
  });


    app.listen(process.env.PORT || 4000, function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });