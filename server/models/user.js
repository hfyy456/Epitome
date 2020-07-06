let { Schema } = require('mongoose');
let { mongoClient } = require('../configs/mongodb/index');

const userSchema = new Schema({
  username: String,
  password: String,
},
  {
    runSettersOnQuery: true // 查询时是否执行 setters
  }
)
let User = mongoClient.model(`User`, userSchema, 'user');

module.exports = User