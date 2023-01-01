require("dotenv").config();
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello, This is jboard project!');
});

const boardList = [
    {idx: 1, title: "아싸 첫글!", writer: {idx: 3, user_id: "kado", user_name: "카도쨩"}, views: 15},
];

app.get('/list', (req, res) => {
    res.send(boardList);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
});