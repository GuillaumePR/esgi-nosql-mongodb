const { MongoClient } = require("mongodb");

const connectionString = "mongodb://localhost:27017/";

const client = new MongoClient(connectionString);

let _db;
const mongoConnect = function (callback) {
  try {
    conn = client.connect().then((client) => {
      _db = client.db("airbnb");
    });
  } catch (e) {
    console.error(e);
  }
};

const getDB = () => {
  if (_db) {
    return _db;
  } else {
    throw new Error("DB connect failed");
  }
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
