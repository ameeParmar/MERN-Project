const { model, Schema } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  item: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)