import { Router } from 'express';
import userModel from '../models/userMode.js'

const userRoutes = new Router();

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


userRoutes.get('/', (req, res) => {
    res.cookie("hello","world");
    res.cookie("muruga", "perumal");
    console.log(req.headers);
    userModel.insertOne({username: "muruga", password: "asdfasdf"})
    const user = userModel.findOne({username:"muruga"});
    return res.send(user);
});

userRoutes.get("/user", (req, res)=>{
    const query = req.query;
    return res.send(query);
})

userRoutes.post("/user", (req, res)=>{
    console.log(req.body);
    return res.send(mockUser);
})

userRoutes.get("/:userId",(req, res) => {
    const parsedUserId = parseInt(req.params.userId);
    if(isNaN(parsedUserId)){
        return res.status(500).send("invalid user id");
    }
    const user = mockUser.find((user)=> user.userId === parsedUserId);
    return res.send(user);
})

export default userRoutes;
