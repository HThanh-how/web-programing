const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Dữ liệu người dùng (giả sử)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Đường dẫn đến trang đăng nhập
app.get('/api', (req, res) => {
    res.status(200).send({ name: 'John Doe' });
});

// Xử lý yêu cầu đăng nhập
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Kiểm tra xem thông tin đăng nhập có hợp lệ không
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.user = user; // Lưu thông tin người dùng vào session
        return res.redirect('/welcome');
    } else {
        return res.send('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
});

// Trang chào mừng
app.get('/welcome', (req, res) => {
    if (req.session.user) {
        res.send('Chào mừng, ' + req.session.user.username + '!');
    } else {
        res.redirect('/');
    }
});

// Khởi động server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
