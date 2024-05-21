import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server running PORT :${PORT}`);
})



// middleware
app.use(express.static('public'));
app.use(express.json())
// view engine
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/auth', authRouter)


app.get('/posts', (req, res) => {
    res.json(posts);
});


// MongoDB connection URI from environment variables
const dbURI = process.env.DB_URI;
// mongoose.connect(dbURI)
//     .then(() => app.listen(3000, () => {
//         console.log('Server is running on port 3000');
//     }))
//     .catch((err) => console.log(err));

    // routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.get('/signup', (req, res) => res.render('signup'));
app.get('/login', (req, res) => res.render('login'));