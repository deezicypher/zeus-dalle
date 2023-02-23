import express from "express";
import * as dotenv from "dotenv";
import cors from 'cors';
import postRoutes from './routes/post.js';
import dalleRoutes  from './routes/dalle.js';

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json({limit: '50mb'}))

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);



const startServer = async () => {
    app.listen(8080, ()=> console.log('Server has started on port 8080'))

}

startServer()