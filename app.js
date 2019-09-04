// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const express = require('express'),
      sgMail = require('@sendgrid/mail');
const app = express();

app.use(express.static(__dirname));

sgMail.setApiKey('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'); 

app.get("/", function(req, res){
	var customer = req.query.customer;
	console.log(customer);
	if(customer){
		const msg = {
			to: customer.email,
			from: 'tamanna_beauty_saloon@example.com',
			subject: 'Appointment Booking',
			text: 'sfsfsfsaffggdf',
			html: 'Dear '+customer.name+' ,Your appointment booked succesfully. We will get in touch with you soon.',
		};
		const msg1 = {
			to: 'theindiecorp@gmail.com',
			from: 'tamanna_beauty_saloon@example.com',
			subject: 'Sending with Twilio SendGrid is Fun',
			text: 'sfsfsfsaffggdf',
			html: '<h1>Someone has booked appointment at tamanna saloon.</h1><br><h2>User info</h2><br><b>Name: '+customer.name+'<br><b>Email: '+customer.email+'<br><b>Message: '+customer.message+'<br><b>Number: '+customer.Number
		};
		sgMail.send(msg);
		sgMail.send(msg1);
		
			
	}
	res.render('home.ejs');



});



app.listen(3000, (req, res)=>{
    console.log("Server running on localhost:");
});