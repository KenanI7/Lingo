import express from "express";
import { registerUser } from "./controllers/userController";
import { getAllUsers } from "./controllers/userController";
import { MongoClient, Collection } from 'mongodb';

const app = express();

app.use(express.json());

// Define MongoDB connection parameters
const uri = 'mongodb+srv://LingoAdmin:2H9ixYwdHwvmUcy6@lingo.4dysqby.mongodb.net/';
const dbName = 'your-database-name'; // Specify your database name here

// Create a new MongoClient instance
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        // Pass the database instance to the userRoutes
        const db = client.db(dbName);
        app.use("/api", userRoutes(db));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();


app.get("/", (req, res) => {
  res.send("SUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
