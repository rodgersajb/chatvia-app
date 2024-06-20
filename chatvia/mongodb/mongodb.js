import { MongoClient } from "mongodb";

const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "chatvia";

async function connect() {
  await client.connect();
  const db = client.db(databaseName);
  db.collection("users").insertOne({
    name: "crodg",
    email: "crodg@crodg.com",
  });
}

connect();
