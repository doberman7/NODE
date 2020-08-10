const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http

// create a function to interpolate the URL into the file path
const getViewUrl = (url) => {
  return `views${url}.html`;
};

//asign fs module
const fs = require('fs');

http.createServer((req, res) => {
  // get the file path string
  let viewUrl = getViewUrl(req.url);
  // interpolate the request URL into you fs file search
  fs.readFile(viewUrl, (error, data) => {
    //handle errors with 404 responso code
    if (error) {
      res.writeHead(httpStatus.NOT_FOUND);
      res.write("<h1>FILE NOT FOUND</h1>");
      //response with file content
    } else {
      res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
      });
      res.write(data);
    }
    res.end();
  });
})
.listen(port);
console.log(`The server has started and is listening on port number:
 ${port}`);
