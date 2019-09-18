const express = require('express')
const app = express()
const methodOverride = require('method-override')


app.use(express.urlencoded({ extended: true }))


app.use(express.json())


app.use(methodOverride('_method'))


app.use(express.static(__dirname + "/client/build"))


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


//Routers & Routes
const { userRouter } = require('./controllers/user.js')
const { noteRouter } = require('./controllers/note.js')
const { registrationRouter} = require('./controllers/registration')

app.use('/user', userRouter)
app.use('/note', noteRouter)
app.use('/registration', registrationRouter)


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
