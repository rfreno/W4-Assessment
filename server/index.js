const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addGratitude, deleteMe, vote } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/gratitude", addGratitude)
app.delete("/api/gratitude/:id", deleteMe) // request received to 
app.put("/api/gratitude/:id", vote)

app.listen(4000, () => console.log("Server running on 4000"));
