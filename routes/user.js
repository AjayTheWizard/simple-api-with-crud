import express from 'express';
import { v4 as uuidv4} from 'uuid';

const router = express.Router();
let users=[
]
router.get('/', (req,res)=>{
    res.send(users)
});
router.post('/', (req,res)=>{
    console.log("POST ROUTER REACHED");
    const user = req.body
    const userWithId = {...user, id:uuidv4()}
    users.push(userWithId)
})
router.get('/:id', (req,res)=>{
    const { id } = req.params;
    const foundUsers = users.find((user)=> user.id === id);
    res.send(foundUsers)
})
router.delete('/:id', (req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=> user.id !== id)
})
router.patch("/:id", (req,res)=>{
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user)=> user.id === id);
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = firstName
    if(age) user.age = age
})
export default router;