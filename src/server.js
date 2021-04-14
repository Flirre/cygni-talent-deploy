const http = require("http");

function createServer(config = {}) {
  const { buildNumber = "n/a" } = config;
  let fastCode = "";
  var bad_Code = "hullo";
  const server = http.createServer((req, res) => {
    console.log(`Received request ${req.method.toUpperCase()} ${req.url}`);
    res.writeHead(200, "OK");
    res.write(Buffer.from(`${bad_Code} Build number ${buildNumber}\n`));
    res.end();
  });

  return server;
}

module.exports = createServer;
