const Conf = require('./utils/conf');
const express = require('express');
const app = express();
const fs = require('fs');
const fileList = fs.readdirSync(__dirname + '/mock-data');
fileList && fileList.forEach(item => {
    let file = JSON.parse(fs.readFileSync(__dirname + '/mock-data/' + item));
    file && file.forEach(sitem => {
        let method = sitem.method.toLowerCase(),
            url = sitem.url,
            response = sitem.response;
        app[method](url, (req, res) => {
            console.log(req);
            res.send(response)
        })
    })
});
app.listen(Conf.PORT);
console.log(`express is listening port ${Conf.PORT}`);