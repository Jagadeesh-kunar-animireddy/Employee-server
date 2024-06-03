import express from 'express'
 
import cors from 'cors'
import { connectDB } from './config/db.js';
import empRoutes from './routes/empRouts.js';

const app = express();
const port = 4000 ;

app.use(express.json());
app.use(cors());

connectDB();

//api end points
app.use("/api/emp",empRoutes)
app.get('/',(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>{

    console.log(`server Started on ${port}`);

})

//mongodb+srv://danewarp:Praveen75@cluster0.vrz74lz.mongodb.net/?