const mongoose = require('./connection')

const NoteSchema = new mongoose.Schema ({
    title : {
        type: String
    },
    note: {
        type: String
    }
})

const Note = mongoose.model('Note', NoteSchema)


module.exports = Note