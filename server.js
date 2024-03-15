import http from "http"

let server = http.createServer();

const handleRequest = (req, res) =>{
    console.log(`Got a request for ${req.method} ${req.url}`);
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello From a Node Server");

}

server.on("request", handleRequest);

server.listen(1930, () => {
    console.log("Now listening ....");
});