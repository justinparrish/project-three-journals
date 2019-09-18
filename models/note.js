const mongoose = require('mongoose')

const ObjectID = mongoose.ObjectID

const NoteSchema = new mongoose.Schema ({
    title : {
        type: String
    },
    note: {
        type: String
    },
    userId: {
        type: ObjectID
    }
})

const Note = mongoose.model('Note', NoteSchema)


module.exports = Note