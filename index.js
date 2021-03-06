const express = require('express')
const session = require('express-session')
const morgan = require('morgan');
const app = express()

const FRONTEND_URL = process.env.FRONTEND_URL; 

const sess = {
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000,
    sameSite: "none",
    secure: true,
    httpOnly: true,
  }
}
app.set('port', (process.env.PORT || 3000));
app.use(morgan('combined'));
app.set('trust proxy', 1) // trust first proxy
app.use(session(sess))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', `${FRONTEND_URL}`);
  res.header('Access-Control-Allow-Method', 'GET, POST, HEAD, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.post('/chat', (req, res) => {
  console.log(`sessionID: ${req.sessionID}, maxAge: ${req.session.cookie.maxAge}, counter: ${req.session.counter}`)
  console.log(JSON.stringify(req.body));
  const response = {output: []};
  const msg = response.output;

  let message = req.session.hasOwnProperty('counter') ? '' : '新しいセッションを開始しました。<br /><br />'
  req.session.counter = req.session.hasOwnProperty('counter') ? req.session.counter + 1 : 1
  message += `session ID: ${req.sessionID}<br />expires: ${req.session.cookie.expires}<br />maxAge: ${req.session.cookie.maxAge}<br /> counter: ${req.session.counter}`

  msg.push({
    type: 'text',
    value: message
  });
  msg.push({
    type: 'youtube',
    value: 'VIyE2K33w-w',
    delayMs: 500 // wait(milliseconds)
  });

  res.json(response);
})

app.listen(app.get('port'), () => console.log('listening on port ' +  app.get('port')));
