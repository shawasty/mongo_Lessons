const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testroot',
{
    useUnifiedTopology: true, useNewUrlParser: true}).then (()=>{
        console.log('successfully connected to MongoDB')
    }).catch(e => {
        console.error('Connection error', e.message)
      });