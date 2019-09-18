const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/journal";

mongoose.set('useFindAndModify', false)

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });

module.exports = mongoose
