const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();
//server fires the code in callback function when a request event is trigered
app.on("request", (req, res) => {  
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });
//prepare response
  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);
  //log the HTTP method
  console.log(req.method);
  //the request url
  console.log(req.url);
  //log the request headers
  console.log(req.headers);
  //convert js into to string
  const getJSONString = obj => {
    return JSON.stringify(obj,null, 2);
  }
});
//response with html
  app.listen(port);
  console.log(`The server has started and is listening on port number:
   ${port}`);
