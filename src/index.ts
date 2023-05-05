import express from 'express';
const app = express();

app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('',(req, res, next)=>{
    res.render('index')
})

app.get('/login',(req, res, next)=>{
    res.render('user/login.ejs')
})
app.get('/register',(req, res, next)=>{
    res.render('user/register.ejs')
})

app.listen(3000, () => {
    console.log('Server is running')
})
