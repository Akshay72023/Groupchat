const express = require('express');

const router = express.Router();


router.get('/login', (req, res,next) => {
    res.send('<form action="/login" method="POST"><input type="text" id="username" name="username" placeholder="Enter your username" required><button type="submit">Login</button></form>');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    const { username } = req.body;
    res.send(`<script>localStorage.setItem('username', '${username}'); window.location.href = '/';</script>`);
   
});

module.exports = router;