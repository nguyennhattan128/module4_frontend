import express from 'express';
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
