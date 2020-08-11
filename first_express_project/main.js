const port = 3000,
  express = require("express"),//ad express to app
  app = express();//add the expres application to the app constant
  chalkAnimation = require('chalk-Animation')

app.get("/", (req, res) => {//set a get route to for the home page
  res.send("Hello, Universe!");//issue a response from the server to the client with res.send
})
.listen(port, () => {//seth the app to listen port 3000
  //console.log(`The Express.js server has started and is listening  on port number: ${port}`);
  chalkAnimation.rainbow(`The Express.js server has
    started and is listening  on port number: ${port}`)
});
