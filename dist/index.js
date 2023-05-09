"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const hostname = '127.0.0.1';
const port = 3000;
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express_1.default.static('./public'));
app.get('', (req, res, next) => {
    res.render('index');
});
app.get('/login', (req, res, next) => {
    res.render('user/login.ejs');
});
app.get('/register', (req, res, next) => {
    res.render('user/register.ejs');
});
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=index.js.map