const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http
    .createServer((req, res) => {
    res.writeHead(httpStatus.OK,{
      "Content-Type":"text/html"
    });
    let responseMessage = "<h1>Welcome</h1>";
    res.end(responseMessage);

    //this we put to check the response on terminal
    // const getJSONString = obj => {
    //   return JSON.stringify(obj,null, 2);
    // }
    // console.log(`Method: ${getJSONString(req.method)}`);
    // console.log(`URL: ${getJSONString(req.url)}`);
    // console.log(`Headers: ${getJSONString(req.headers)}`);

  })
.listen(port);
