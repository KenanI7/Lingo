import express from "express";
import { registerUser } from "./controllers/userController";
import { getAllUsers } from "./controllers/userController";

const app = express();

app.use(express.json());

app.post("/api/users", registerUser);
app.get("/api/users", getAllUsers); 



app.get("/", (req, res) => {
  res.send("SUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
