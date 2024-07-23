const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Welcome to the CTF Challenge! Find the flag.');

});

app.get('/flag', (req, res) => {
    res.send('CTF{simple_web_challenge}');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
});
