import express from 'express';
import { MongoClient } from 'mongodb';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

const uri = 'mongodb+srv://LingoAdmin:2H9ixYwdHwvmUcy6@lingo.4dysqby.mongodb.net/';
const dbName = 'Lingo';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        userRoutes(app, db);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("SUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectToMongoDB();
