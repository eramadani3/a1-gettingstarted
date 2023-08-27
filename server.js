const http = require("http"),
  fs = require("fs"),
  port = 3000;

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      sendFile(response, "style.css");
      sendFile(response, "/node_modules/animejs/lib/anime.min.js");
      break;
    case "/index.html":
      sendFile(response, "index.html");
      break;
    case "/style.css":
      sendFile(response, "style.css");
      break;
    case "/node_modules/animejs/lib/anime.min.js":
      sendFile(response, "/node_modules/animejs/lib/anime.min.js");
      break;
    default:
      response.end("404 Error: File Not Found");
  }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, "utf-8");
  });
};
