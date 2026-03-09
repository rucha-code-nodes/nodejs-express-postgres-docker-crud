import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import errorHandling from './middleware/errorHandler.js';
import createdUserTable from './data/createUserTable.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api",userRoutes)


//Error Handeling
app.use(errorHandling);

//create table before starting the server
createdUserTable();


app.get('/', async(req,res)=>{
  console.log('Start');
  const result = await pool.query('SELECT current_database()');
  console.log('end');
  res.send(`The DB name is : ${result.rows[0].current_database}`)
});




//Server running
app.listen(port,() =>{
  console.log(`Server running on port http:local:${port}`);
})