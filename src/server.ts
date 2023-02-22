import mongoose from'mongoose';
import express from 'express';
import routes from './routes';


const app=express();

mongoose.connect('mongodb://localhost/nodeTrain')

app.use(express.json());
app.use(routes);


app.listen(3000, ()=>{

console.log("alou");
})