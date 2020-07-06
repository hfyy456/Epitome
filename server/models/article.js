let { Schema } = require('mongoose');
let { mongoClient } = require('../configs/mongodb/index');

const articleSchema = new Schema({
  content: String,
  title: String,
  subtitle: String,
  author: String,
  original: Boolean,
  preview: String,
  oUrl: String,
  image: String,
  blog: String,
  createTime: Date  
},
  {
    runSettersOnQuery: true // 查询时是否执行 setters
  }
)
let Article = mongoClient.model(`Article`, articleSchema, 'article');

module.exports = Article