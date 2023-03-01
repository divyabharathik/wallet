import express from 'express';
import accountRoutes from './routes/accounts.js';


const app = express();
const PORT = 8080;
app.use(express.json())
app.use('/account', accountRoutes);
app.listen(
    PORT,
    ()=> console.log(`Its on ${PORT}`)
);

app.get('/shirt',(req,res)=>{
    res.status(200).send({
        mummy: 'sfsdf',
        ssdf: "rrrrr"
    })
});

app.post('/shirt/:id', (req, res)=>{
    const {id}= req.params;
    const {logo}= req.body;
    if(!logo){
        res.status(418).send({message: "helo no logo"});
    }else{
        res.send({message:"logo found "+logo+" with id "+id})
    }
})