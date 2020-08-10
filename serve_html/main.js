const port = 3000,
  http = require("http"),
  //require the fs module
  httpStatus = require("http-status-codes"),
  fs = require("fs");
  // set up route map for html file
const routeMap = {
  "/": "views/index.html"
};

http
  .createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });
    if (routeMap[req.url]) {
      // read the contents of the maped file
      fs.readFile(routeMap[req.url], (error, data) => {
        // respond with the file content
        res.write(data);
        res.end();
      });
    } else {
      res.end("<h1>Sorry, not found.</h1>");
    }
  })
  .listen(port);
console.log(`The server has started and is listening
 on port number: ${port}`);
