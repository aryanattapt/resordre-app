import { MongoClient, ObjectId, Document, OptionalUnlessRequiredId, Filter, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB || "";

let client: MongoClient;
let dbInstance: Db;

async function connectDB() {
    if (!client) {
        try {
            client = new MongoClient(uri);
            await client.connect();
            dbInstance = client.db(dbName);
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
            throw new Error("Database connection failed");
        }
    }
    return dbInstance;
}

export async function createDocument<T extends Document>(collection: string, data: OptionalUnlessRequiredId<T>) {
    const db = await connectDB();
    try {
        const result = await db.collection<T>(collection).insertOne(data);
        return result;
    } catch (error) {
        console.error("Error creating document:", error);
        throw error;
    }
}

export async function getDocuments<T extends Document>(collection: string, query: Filter<T> = {}) {
    const db = await connectDB();
    try {
        const documents = await db.collection<T>(collection).find(query).toArray();
        return documents;
    } catch (error) {
        console.error("Error fetching documents:", error);
        throw error;
    }
}

export async function getDocumentById<T extends Document>(collection: string, id: string) {
    const db = await connectDB();
    try {
        const document = await db.collection<T>(collection).findOne(
            { _id: new ObjectId(id) } as Filter<T>
        );
        return document;
    } catch (error) {
        console.error("Error fetching document by ID:", error);
        throw error;
    }
}

export async function updateDocument<T extends Document>(collection: string, id: string, updates: Partial<T>) {
    const db = await connectDB();
    try {
        const result = await db.collection<T>(collection).updateOne(
            { _id: new ObjectId(id) } as Filter<T>,
            { $set: updates }
        );
        return result;
    } catch (error) {
        console.error("Error updating document:", error);
        throw error;
    }
}

export async function deleteDocument(collection: string, id: string) {
    const db = await connectDB();
    try {
        const result = await db.collection(collection).deleteOne(
            { _id: new ObjectId(id) } as Filter<Document>
        );
        return result;
    } catch (error) {
        console.error("Error deleting document:", error);
        throw error;
    }
}