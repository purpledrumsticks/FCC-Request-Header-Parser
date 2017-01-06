let express = require('express');
let app = express();

app.get('/', (req, res) => {
  let r = require('ua-parser').parse(req.headers['user-agent']);

  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) === "::ffff:") {
    ip = ip.substr(7);
  }

  let userObject = {
    ipaddress: ip,
    language: req.headers["accept-language"].split(',')[0],
    software: r.os.toString()
  };

  res.send(userObject);
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Example app is listening on port 3000');
});
