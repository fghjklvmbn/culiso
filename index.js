// culiso-server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = []; // 임시로 데이터를 저장하기 위한 배열

// 회원가입
app.post('/signup', (req, res) => {
  const { name, birthdate, email, username, password, phone, nickname } = req.body;
  const newUser = { name, birthdate, email, username, password, phone, nickname };
  users.push(newUser);
  res.json({ success: true, message: '회원가입이 완료되었습니다!' });
});

// 로그인
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, message: '로그인 성공' });
  } else {
    res.json({ success: false, message: '아이디 또는 비밀번호가 잘못되었습니다.' });
  }
});

// 아이디 찾기
app.post('/find-id', (req, res) => {
  const { name, email } = req.body;
  const user = users.find(u => u.name === name && u.email === email);
  if (user) {
    res.json({ success: true, username: user.username });
  } else {
    res.json({ success: false, message: '해당 정보로 아이디를 찾을 수 없습니다.' });
  }
});

// 비밀번호 찾기
app.post('/find-password', (req, res) => {
  const { username, email } = req.body;
  const user = users.find(u => u.username === username && u.email === email);
  if (user) {
    res.json({ success: true, password: user.password });
  } else {
    res.json({ success: false, message: '해당 정보로 비밀번호를 찾을 수 없습니다.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});