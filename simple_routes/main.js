//define maping routes with responses
const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact us</h1>",
  "/about": "<h1>Learn More About us</h1>",
  "/hello": "<h1>Info Page</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here</h1>",
}

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer(( req, res) => {
    res.writeHead(200, {
      "Content-Type":"text/html"
    });
    //check whether a request route is defined in the map
    if (routeResponseMap[req.url]){
      //resp
      res.end(routeResponseMap[req.url]);
    }else{
      res.end("<h1>Welcomess!");
    }
    const getJSONString = obj => {
      return JSON.stringify(obj,null, 2);
    }

    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

});

app.listen(port);
console.log(`The server has started and is listening on port number:
  ${port}`);
