const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const router = express.Router();

router.use(bodyParser.json());

const secretKey ='you-secret-key';

let users =[
      {
        id: 1,
        name: 'Anselmo',
        email: 'Anselmo@gmail.com',
        password: '123456',
        page:'/grafico',
      },
]


router.post('/Login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email && user.password === password);
  
    if (user) {
      const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
  
      return res.status(200).json({ token, redirect: user.page });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  
  router.post('/create-user', (req, res) => {
    const { nome, email, senha } = req.body;
  
    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ message: 'Email already in use' });
    }
  
    const newUser = {
      id: users.length + 1,
      name: nome,
      email: email,
      password: senha,
      page:'/grafico',
    };
  
    users.push(newUser);
  
    return res.status(201).json({ message: 'User created successfully', user: newUser });
  });
  

  module.exports = router