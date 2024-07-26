import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
const app= express();
dotenv.config();
const PORT= process.env.PORT || 3000;
app.use('/api/auth', authRoutes);
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})