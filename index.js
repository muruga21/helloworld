import express from 'express';
import userRoutes from './routes/userRoute.js'
import mongoose from 'mongoose';


const app = express();

app.use(express.json());

const logMiddleware = (req, res, next) =>{
    console.log(`${req.method}  ${req.url}`);
    next();
}

app.use(logMiddleware);

mongoose.connect("mongodb://localhost:27017/learning").then(()=>{
    console.log("database connected successfully...!");
}).catch((err)=>{console.log(err)})


const mockUser = [
    {
        "userId" : 1,
        "userName" : "muruga"
    },
    {
        "userId" : 2,
        "userName" : "kishore"
    },
    {
        "userId" : 3,
        "userName" : "linga"
    }
]

app.use(userRoutes);

app.listen(5000, ()=>{
    console.log("server is listening on port 5000");
});