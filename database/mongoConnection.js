const mongoose = require('mongoose')

const mongoDB = process.env.MONGO_URI

exports.connect = async () => {
  try {
    await mongoose.connect(mongoDB)
    console.log('Connected to MongoDB successfully')
  } catch (e) {
    console.log('MongoDB connection error: ')
    console.log(e)
  }
}

exports.disconnect = async () => {
  try {
    await mongoose.disconnect()
  } catch (e) {
    console.log(e)
  }
}