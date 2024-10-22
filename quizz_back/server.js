const express = require("express");
const Commands = require("./pgs/commands");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors()); // allow cross-origin requests


app.get("/users", Commands.getUsers);
app.post("/adduser", Commands.addUser);
app.post("/user", Commands.getUser);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
