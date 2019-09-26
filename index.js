const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileSystem = require('fs');
const path = require('path');
const formidable = require('express-formidable');
const fs = require('fs');

// app.use(formidable());
app.use(morgan('tiny'));
app.use(bodyParser.raw({
    type: 'application/pdf',
    limit: '100mb'
}));
/**
 *  Partner (Webhook) Endpoint Stubs
 */
app.all('*',
    (req, res) => {
      console.log(req);
        // console.log(req.files);
        // console.log(req.fields);
        // console.log(req.body);
        fs.writeFile("./test.pdf", req.body,  "binary",function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });
        res.send()
    }
);

app.listen(7777);
console.log('Stub server listening on port', '7777');
