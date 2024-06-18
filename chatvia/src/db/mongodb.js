const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "chatvia";

async function main() {
  await client.connect(connectionURL);
  const db = client.db(databaseName);
  

  db.collection("users").insertOne({
    name: "Alex",
    age: 35,
    role: "admin",
  });

const findUsers = await db.collection('users').find({}).toArray()
console.log(findUsers)
}


main();
