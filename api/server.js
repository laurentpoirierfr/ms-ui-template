const express = require('express');
const app = express();
const fs = require('fs');

bodyParser = require("body-parser");
port = 3080;

app.use(bodyParser.json());

app.get('/api/v1/info', (req, res) => {
    const infos = { 
        application : {
            name: "my-application-exemple",
            description: "Application à titre d'exemple pour la mise en place d'une UI standard.",
            version: "0.1.0",
            profile: "dev"
        }
    };
    res.json(infos);
});

app.get('/api/v1/health', (req, res) => {
    res.json({ status: "UP" });
});


app.get('/api/v1/menu', (req, res) => {
    var menu = {}
    fs.readFile('menu.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.json(JSON.parse(data));
      })
});

app.get('/api/v1/console', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); // flush the headers to establish SSE with client

    let counter = 0;
    let interValID = setInterval(() => {
        counter++;
        if (counter >= 10) {
            clearInterval(interValID);
            res.end(); // terminates SSE session
            return;
        }

        messages = [
            { type: "error", message : "Une erreur est survenue durant le traitement !" },
            { type: "info", message : "flush the headers to establish SSE with client" },
            { type: "info", message : "flush the headers to establish SSE with client" },
            { type: "info", message : "flush the headers to establish SSE with client" },
            { type: "warning", message : "flush the headers to establish SSE with client" },
            { type: "info", message : "flush the headers to establish SSE with client" }
        ];

        var message = messages[Math.floor(Math.random()*messages.length)];

        res.write(`data: ${JSON.stringify( message )}\n\n`); // res.write() instead of res.send()

    }, 1000);

    // If client closes connection, stop sending events
    res.on('close', () => {
        console.log('client dropped me');
        clearInterval(interValID);
        res.end();
    });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});