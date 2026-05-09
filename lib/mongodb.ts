import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is not set");
}

const globalForMongo = globalThis as unknown as {
  client?: MongoClient;
  clientPromise?: Promise<MongoClient>;
};

function createClient(uri: string) {
  return new MongoClient(uri, {
    maxPoolSize: 5,
    minPoolSize: 0,
    maxIdleTimeMS: 30_000,
    serverSelectionTimeoutMS: 5_000,
  });
}

export async function getMongoClient() {
  if (globalForMongo.clientPromise) {
    return globalForMongo.clientPromise;
  }

  if (!globalForMongo.client) {
    globalForMongo.client = createClient(mongoUri!);
  }

  globalForMongo.clientPromise = globalForMongo.client.connect();

  return globalForMongo.clientPromise;
}

export async function getDatabase() {
  const dbName = process.env.MONGODB_DB ?? "carpentry";
  const connectedClient = await getMongoClient();
  return connectedClient.db(dbName);
}
