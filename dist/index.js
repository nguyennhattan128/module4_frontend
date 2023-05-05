"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map