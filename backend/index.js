import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5555;
const mongoDBURL=process.env.DB;

app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Hello SAUMYA here');
});

app.use('/books', booksRoute);

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
