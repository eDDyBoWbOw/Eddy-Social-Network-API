const { Schema, model } = require('mongoose');
// const {Thought} = require('./index');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought' // This refers to the Thought model
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User' // This refers to the User model (self-reference)
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
