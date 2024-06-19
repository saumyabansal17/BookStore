import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// import { PORT, mongoDBURL } from './config.js';
// import connectDB from "./db/connect.js";
// const PORT = process.env.PORT || 5555;
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5555;
const mongoDBURL=process.env.DB;

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Hello SAUMYA here');
});

mongoose
.connect(mongoDBURL)
.then(() =>{
  console.log("Db connected successfully");
  app.listen(PORT, () => {
                console.log(`App is listening on port: ${PORT}`);
               });
})
.catch((error)=>{
  console.log(error);
})

// const start = async()=>{
//   try{
//         await connectDB();
//          console.log('App connected to database');
//          app.listen(PORT, () => {
//            console.log(`App is listening on port: ${PORT}`);
//          });
//         }
//   catch(error){
//     console.log(error);
//   }
// }

// start();
// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log('App connected to database');
//     app.listen(PORT, () => {
//       console.log(`App is listening on port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });
