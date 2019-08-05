const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileSystem = require('fs');
const path = require('path');


app.use(morgan('tiny'));

/**
 *  Partner (Webhook) Endpoint Stubs
 */
app.post(/.*webhook.*/,
    bodyParser.json(),
    (req, res) => {
        console.log(JSON.stringify(req.body, null, 4));

        if (req.body.message.content.documents) {
            const document = req.body.message.content.documents[0];
            fileSystem.writeFile(path.join(__dirname, document.filename), document.binary, 'base64', function (err) {
                return (err)
                    ? res.status(500).send(err)
                    : res.status(200).send()
            });
        }

        res.status(200).send()
    }
);

app.listen(process.env.PORT);
console.log('Stub server listening on port', process.env.PORT);
