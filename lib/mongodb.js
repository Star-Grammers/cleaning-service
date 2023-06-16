/* eslint-disable no-underscore-dangle */
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {};

let client;
// eslint-disable-next-line import/no-mutable-exports
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-underscore-dangle
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
