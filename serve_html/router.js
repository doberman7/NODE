const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html"
  },
  //define routes objects to store routes maped to POST and GET requests
  routes = {
    "GET": {
      "/info": (req, res) => {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/plain"
        })
        res.end("Welcome to the Info Page!")
      }
    },
    'POST': {}
  };
//create a function called handle to process route callback functions
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>");
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};
//buid get and post functionsn to register routes from main .js
exports.get = (url, action) => {                
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};
