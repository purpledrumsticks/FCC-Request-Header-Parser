let express = require('express');
let os = require('os');
let app = express();

app.get('/', (req, res) => {
  let userObject = {
    ipaddress: req.ip,
    language: req.headers["accept-language"].split(',')[0],
    software: os.type() + ' ' + os.release()
  };

  res.send(userObject);
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Example app is listening on port 3000');
});
