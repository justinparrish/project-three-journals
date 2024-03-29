const express = require('express')
const app = express()
const methodOverride = require('method-override')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))


app.use(express.static(__dirname + "/client/build"))


app.get('/journal', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


//Routers & Routes
const userRouter = require('./controllers/user.js')
const noteRouter = require('./controllers/note.js')
const registrationRouter = require('./controllers/registration.js')

app.use('/user', userRouter)
app.use('/note', noteRouter)
app.use('/registration', registrationRouter)


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
