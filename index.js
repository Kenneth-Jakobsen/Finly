const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user.route');

require('dotenv').config();
require('./libs/dbConnect');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js with partials' });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});

app.use('/users', userRouter);




const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});