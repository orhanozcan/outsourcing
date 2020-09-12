var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "301fd5d5f4c708",
        pass: "42347b6db8c08f"
    }
});

const message = {
    from: '2e25bb910a-72ebb0@inbox.mailtrap.io',
    subject: 'outSourcing Mail Header',
};
// to: eklenecek
// html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'


module.exports = {
    sendMail: (mail, text, callback) => {
        const start = Date.now()
        message.to = mail
        message.html = text
        return transport.sendMail(message, (err, info) => {
            const duration = Date.now() - start
            console.log('send mail', { message, duration, info })
            callback(err, info)
        })
    },
    sendActivationEmail: (mail, uuid, callback) => {
        const start = Date.now()
        message.to = mail
        message.html = '<P><a href=\'localhost:3000/activate?uuid=' + uuid + '\'>Go Activate your mail adress Please Click the Link</a></p>'
        return transport.sendMail(message, (err, info) => {
            const duration = Date.now() - start
            console.log('send mail', { message, duration, info })
            callback(err, info)
        })
    }

}
