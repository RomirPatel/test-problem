const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
import { SpeedInsights } from "@vercel/speed-insights/next"


app.get('/', (req, res) => {
    res.send('Welcome to the CTF Challenge! Find the flag.');
    <SpeedInsights />
});

app.get('/flag', (req, res) => {
    res.send('CTF{simple_web_challenge}');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
