import { NowRequest, NowResponse} from '@vercel/node';
import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {

    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) 

    const dbName = url.parse(uri).pathname.substr(1);

    const db = client.db(dbName)

    cachedDb = db;

    return db;
}

export default async (request: NowRequest, response: NowResponse) => {
    const { email } = request.body;

    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection('subscribers')

    await collection.find({ email: email }).toArray(async function (err, results) {
        if (results.length > 0) {
            return response.status(201).json({ ok: true, tem: true})
        } else if(email == null) {
            return response.status(201).json({ ok: false})
        } else {
            await collection.insertOne({
                email,
                subscribedAt: new Date(),
            });
            return response.status(201).json({ ok: true, tem: false})
        }// output all records
    });
}