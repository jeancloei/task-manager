const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = "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" 

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jeancloei@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jeacloei@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon`
  })
}

module.exports = {
  sendWelcomeEmail, sendCancelationEmail
}