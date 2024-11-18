require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { userRouter } = require('./routes/user.js')
const { courseRouter } = require('./routes/course.js')
const { adminRouter } = require('./routes/admin.js')

const app = express()
const PORT = 3000;

app.use(express.json())

// const uri = process.env.MONGO_URL || 'mongodb+srv://dakshagarwal:daksh7743@cluster0.nmtmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// console.log('Using URI:', uri);


app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/admin', adminRouter)

async function main() {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  })
}
main()
