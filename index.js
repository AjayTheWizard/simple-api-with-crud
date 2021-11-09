import  express  from 'express';
import bodyParser from 'body-parser';
import usersRouters from './routes/user.js';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use('/users', usersRouters)
app.get('/',(req,res)=>{
    res.send("<h1 align='center'>REST API</h1>")
});
app.listen(PORT, ()=>(
    console.log(`Server is Running at http://localhost:${PORT}`)
))