const nodemailer = require('nodemailer')

const mailConfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'sanford.dubuque20@ethereal.email',
    pass: 'vs5sx8bShsCqD7rF3w'
  }
}

module.exports = nodemailer.createTransport(mailConfig)