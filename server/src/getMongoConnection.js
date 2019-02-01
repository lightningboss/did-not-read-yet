import { MongoClient } from 'mongodb';
import config from './config';

let mongo;

export default async function getMongoConnection() {
    if (!mongo) {
        const { mongoUrl } = config;

        const connection = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
        });

        mongo = connection.db('dnry');
    }

    return mongo;
}
