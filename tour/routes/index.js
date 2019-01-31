var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/About', function(req, res, next) {
  res.render('About', { title: 'Express' });
});
/* GET home page. */
router.get('/domestic', function(req, res, next) {
  res.render('domestic', { title: 'Express' });
});

/* GET home page. */
router.get('/package', function(req, res, next) {
  res.render('package', { title: 'Express' });
});

/* GET home page. */
router.get('/international', function(req, res, next) {
  res.render('international', { title: 'Express' });
});

/* GET home page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* GET home page. */
router.get('/query', function(req, res, next) {
  res.render('query', { title: 'Express' });
});
/* GET home page. */
router.get('/best-time-to-visit', function(req, res, next) {
  res.render('best-time-to-visit', { title: 'Express' });
});

/* Contact us page */

router.post('/enquiry', (req, res) => {
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
     
     
     
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
 
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'rahulraj.nirala@gmail.com', // generated ethereal user
        pass: '8434606655'  // generated ethereal password
    },
     //tls:{
     //rejectUnauthorized:false
     //}
  });
 
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'info@tourism', // sender address
      to: 'rahul@tourism.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Tourism Website', // plain text body
      html: output // html body
  };
 
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);  
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 
      res.send(`<body style="background-color:gray;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">We Saved Your Enquiry. We will get in touch with you soon </div></body>`);
  });
});







module.exports = router;
