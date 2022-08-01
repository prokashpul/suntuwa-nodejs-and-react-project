const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//mongodb user: santuwa
//password : 0e3GhtaD2Av5Hsrr
//mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jpceo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const run = async () => {
  try {
    await client.connect();

    const toolsCollection = client.db("santuwa").collection("user");
    const user = {
      name: "Prokash Pul",
      email: "prokashpul2@gmail.com",
    };
    const result = await toolsCollection.insertOne(user);
    console.log(result.insertedId);
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);
// get api
app.get("/", async (req, res) => {
  res.send("Hello world ");
});

//app listen
app.listen(port, () => {
  console.log(`Your server ${port}`);
});
