const port = 3000,
//“1 Require the http and http-status-codes modules.”
  http = require("http"),                                           
  httpStatus = require("http-status-codes"),

  //create the server with request and response paramaters
  app = http.createServer((request, response) => {                  
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });
    //write the response to the client                                                         3
    let responseMessage = "<h1>Hello, Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });
//tell the app server ti listen on port 3000
  app.listen(port);                                                   
  console.log(`The server has started and is listening on port number:
  ${port}`);
