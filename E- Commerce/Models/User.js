const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcryptjs  =require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require('../config/jwt.js');
const serverSecret = config.secret;
var UserSchema = new Schema({
  
    Email:String,
    Name:String,
    password:String,
    tokens:[String]
})
UserSchema.methods.comparePassword = function (password) {
    const user = this;
  
    return bcryptjs.compareSync(password, user.password);
  }
  
UserSchema.methods.generateToken = function () {
    const user = this;
    const { _id } = user;
    const token = jwt.sign({ _id }, serverSecret);
  
    user.tokens.push(token);
    return user.save().then(() => token)
}
UserSchema.pre("save", function(next) {
    const user = this;
  
    if (user.isModified('password')) {
      const salt = bcryptjs.genSaltSync(10);
      const hash = bcryptjs.hashSync(user.password, salt);
  
      user.password = hash;
    }
    next();
  })
  

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;