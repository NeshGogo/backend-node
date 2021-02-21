const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema(
  {
    //Especificando la relacion
    users: [
      {
        type: Schema.ObjectId,
        ref: 'user',
      }
    ],
    message: {
      type: String,
      require: true
    },
    date: Date
  }
)

const model = mongoose.model('chat', mySchema);

module.exports = model;