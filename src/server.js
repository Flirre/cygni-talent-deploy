const http = require("http");

function createServer(config = {}) {
  const { buildNumber = "n/a" } = config;

  const server = http.createServer((req, res) => {
    console.log(`Received request ${req.method.toUpperCase()} ${req.url}`);
    res.writeHead(200, "OK");
    res.write(
      Buffer.from(`Heyo dalee! Build number issa dis ${buildNumber}\n`)
    );
    res.end();
  });

  return server;
}

module.exports = createServer;
