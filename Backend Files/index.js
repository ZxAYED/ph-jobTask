const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config
const port = process.env.PORT || 5000

app.use(express.json())

app.use(cors({
  origin: ['http://localhost:5173',], credentials: true
}))

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const uri = `mongodb+srv://taskguard:8sFVuU8fvm6DIDLh@cluster0.tn5eumh.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const tasks = client.db("taskguard").collection("tasks");


    app.post('/tasks', async (req, res) => {
      try {
        const result = await tasks.insertOne(req.body);
        res.send(result)
      }
      catch (error) {
        console.log(error);
      }


    })
    app.get('/tasks', async (req, res) => {



      const query = { email: req.query.email }
      const result = await tasks.find(query).toArray();
      res.send(result)

    })

    app.delete('/tasks/:id',async(req,res)=>{
      try{
        const id=req.params.id
       
        const query={ _id :new  ObjectId(id)}
      
        const result =await tasks.deleteOne(query)
        res.send(result)
      }
      catch(err){
        console.log(err);
      }
      










    })


  } finally {

    //  asADd
  }
}


run().catch(console.dir);
app.get('/', async (req, res) => {
  res.send('server is running on kela')
})

app.listen(port, () => {
  console.log(`Server is Energetic', ${port}`);

})