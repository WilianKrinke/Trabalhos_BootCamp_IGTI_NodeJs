import 'dotenv/config.js';
import mongodb from 'mongodb';

function mongoClientFunction() {
    const uri = `mongodb+srv://igtidesafio:${process.env.NOSQLPASS}@cluster0-wilian-igtides.obi6g.mongodb.net/test`
    return new mongodb.MongoClient(uri)
}

export default mongoClientFunction;