const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();
//listen for Request
app.on("request", (req, res) => {
  //create an array to hold chunk contents
  var body = [];
  //process it in another callback function
  req.on("data", (bodyData) => {
    //add recibed data to the body array
    body.push(bodyData);
  });
  //run code when data transmision ends
  req.on("end", ()=> {
    //convert the body array to a string of text
    body = Buffer.concat(body).toString();
    //log the request's content to your console
    console.log(`Request Body countents: ${body}`);
  });

  const getJSONString = obj => {
    return JSON.stringify(obj,null, 2);
  }

  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Headers: ${getJSONString(req.headers)}`);

  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });
//prepare response
  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);
});
//response with html
  app.listen(port);
  console.log(`The server has started and is listening on port number:
   ${port}`);
