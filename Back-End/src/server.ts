import mongoose from 'mongoose';
import express from 'express';
import routes from './routes';
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*'
}));


mongoose.connect('mongodb://localhost/nodeTrain')

app.use(express.json());
app.use(routes);


app.listen(3000, () => {

    console.log("-------------------------------------------ONLINE-------------------------------------------");
})