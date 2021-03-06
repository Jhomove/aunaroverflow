import express from 'express';
import { question } from './routes';

const cors = require('cors');
const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(cors({Origin: 'http://localhost:4200'}));
    // app.use((req,res,next)=>{
    //     res.setHeader('Access-Control-Allow-Origin','*');
    //     res.setHeader('Access-Control-Allow-Headers','Origin, X-Request-Width,Content-Type, Accept');
    //     res.setHeader('Access-Control-Allow-Methods','POST,GET,PATCH,DELETE,OPTIONS');
    //     next();
    // })
}

app.use('/api/questions', question);

export default app;