require('./identicon')
require('./pnglib')

const serverless = require('serverless-http');
const express = require('express')
const crypto = require('crypto');
const app = express()

app.get('/', (req, res) => {

    if (!req.query['text']) {
        res.status(200).send(`Param:<br>text - used to create hash string<br>size - used to generate specified size of png image<br><br>Usage:<br>e.g. <a href="./?text=ok&size=220">https://avatar.ok.sb/?text=ok&size=220</a>`);
    }

    let size = 220
    if (req.query['size']) {
        const tmp = parseInt(req.query.size);
        if (tmp <= 1024) {
            size = tmp
        }
    }

    const text = req.query.text;
    const hash = crypto.createHash('sha256');
    hash.update(text);
    const hex = hash.digest('hex');
    const data = new Identicon(hex, size).toString();
    const img = Buffer.from(data, 'base64');

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
    });

    res.end(img);
})

module.exports.handler = serverless(app, {
    binary: ['image/png', 'image/gif']
});
