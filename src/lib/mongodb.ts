import { MongoClient, ObjectId, Document } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB || "";

let client: MongoClient;
let dbInstance: ReturnType<MongoClient['db']>;

async function connectDB() {
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
        dbInstance = client.db(dbName);
    }
    return dbInstance;
}

export async function createDocument<T extends Document>(collection: string, data: T) {
    const db = await connectDB();
    return db.collection<T>(collection).insertOne(data);
}

export async function getDocuments<T>(collection: string, query: Partial<T> = {}) {
    const db = await connectDB();
    return db.collection<T>(collection).find(query).toArray();
}

export async function getDocumentById<T>(collection: string, id: string) {
    const db = await connectDB();
    return db.collection<T>(collection).findOne({_id: new ObjectId(id)});
}

export async function updateDocument<T>(collection: string, id: string, updates: Partial<T>) {
    const db = await connectDB();
    return db.collection<T>(collection).updateOne({_id: new ObjectId(id)}, {$set: updates});
}

export async function deleteDocument(collection: string, id: string) {
    const db = await connectDB();
    return db.collection(collection).deleteOne({_id: new ObjectId(id)});
}
