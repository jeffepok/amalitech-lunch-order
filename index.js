const schedule = require('node-schedule');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.listen(3000, ()=>{
//     console.log('Server running on port 3000!')
// });

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 6;
rule.minute = 0;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jefferson.addai-poku@amalitech.org' ,
      pass: '8vPawh75ttrcu2',
    }
  });

let mailOptions = {
  from: 'jefferson.addai-poku@amalitech.org',
  to: 'jeffepok@gmail.com',
  subject: 'Lunch Order App',
  text: 'It works'
}



const job = schedule.scheduleJob(rule, function(){
  transporter.sendMail(mailOptions, function(err, data){
    if(err){
      console.log('Error occured');
  
    }else{
      console.log('Email sent!');
    }
  })
});