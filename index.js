const http = require("http");
const server = http.createServer((req, res) => {
  res.end("🚀 Hello from EC2: Capstone Project Part 2!");
});
server.listen(80);
