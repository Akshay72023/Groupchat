const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const loginRoutes= require('./routes/login')
const messageRoutes=require('./routes/message')

app.use(loginRoutes);
app.use(messageRoutes);


// app.get('/',(req,res,next)=>{
//     fs.readFile('username.txt',{encoding:"utf-8"},(err,data)=>{
//         if(err){
//             console.log('err');
//             data= 'No chat exists';
//         }
//         res.send(
//             `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="text" name="message" id="message" ><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>`
//         );
//     })
   
// });

// app.post('/',(req,res,next)=>{
//     console.log(req.body.username);
//     console.log(req.body.message);
//     fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
//         err ? console.log(err): res.redirect('/');
//     });

// });

// app.get('/login', (req, res,next) => {
//     res.send('<form action="/login" method="POST"><input type="text" id="username" name="username" placeholder="Enter your username" required><button type="submit">Login</button></form>');
// });

// app.post('/login', (req, res) => {
//     console.log(req.body);
//     const { username } = req.body;
//     res.send(`<script>localStorage.setItem('username', '${username}'); window.location.href = '/';</script>`);
   
// });





app.listen(3000);