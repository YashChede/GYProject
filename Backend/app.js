import express from 'express';
import userRouter from '../Backend/routes/user.routes.js'

const app = express();


app.use(express.json());

app.use('/api/v1/users', userRouter);



export { app }
