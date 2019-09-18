const mongooose = require('mongoose')


const RegistrationSchema = new mongooose.Schema ({
    name : {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        min: 1,
        max: 99
    },
    state: {
        type: String,
        require: true,
        maxlength: 2
    },
    email: {
        type: String,
        require: true
    }
})

const RegistrationCollection = mongoose.model('Registration', RegistrationSchema)



module.exports = {
    
}