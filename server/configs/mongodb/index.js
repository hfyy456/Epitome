const mongoose = require('mongoose')
const mongodbConfig = require('./config').mongodb

function getMongoUrl() {
  let mongoUrl = 'mongodb://';
  let dbName = mongodbConfig.db;
  mongoUrl += `${mongodbConfig.host}:${mongodbConfig.port}`;
  mongoUrl += `/${dbName}`;

  return mongoUrl;
}
function getMongodbConfig() {
  let options = {
      useNewUrlParser: true,
      poolSize: 5, // 连接池中维护的连接数
      keepAlive: 120,
      useUnifiedTopology: true
  }
  return options;
}

let mongoClient = mongoose.createConnection( getMongoUrl(), getMongodbConfig() );
mongoClient.on('connected', function() {
  console.log(new Date().getTime())
  console.log('Mongoose连接至 ：' + getMongoUrl());
});

/**
* Mongo 连接失败回调
*/
mongoClient.on('error', function(err) {
  console.log('Mongoose 连接失败，原因: ' + err);
});
/**
* Mongo 关闭连接回调
*/
mongoClient.on('disconnected', function() {
  console.log('Mongoose 连接关闭');
});


function close() {
  mongoClient.close();
}

module.exports = {
  mongoClient: mongoClient,
  close: close,
};