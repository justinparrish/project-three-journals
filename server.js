const app = express()
const cors = require('cors')
const express = require('express')
const methodOverride = require('method-override')
const userRouter = require('./controllers/user.js')
const noteRouter = require('./controllers/note.js')
const registrationRouter = require('./controllers/registration.js')


app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/client/build"))
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})
app.use('/user', userRouter)
app.use('/note', noteRouter)
app.use('/registration', registrationRouter)
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
