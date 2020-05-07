var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gargatesujit@gmail.com',
    pass: '*****'
  }
});

var mailOptions = {
  from: 'gargatesujit@gmail.com',
  to: 'sujitgargate5893@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello there!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});