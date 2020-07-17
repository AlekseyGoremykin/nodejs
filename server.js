const http = require('http');
const os = require('os');
const fs = require('fs');
const qs = require('querystring');
const crypto = require('crypto')

const server = http.createServer((request, response) => {

response.setHeader("Content-Type", "text/html; charset=utf-8;");
  const body = [];
  request.on('data', (chunk) => {
    body+=chunk;
  }).on('end', () => {
    console.log(qs.parse(body))
  })

  if(request.url === "/dir_name"){
    console.log(__dirname);
    response.write("<h2>Dir name</h2>");
  }
  else if(request.url == "/file_name"){
    console.log(__filename);
    response.write("<h2>File name</h2>");
  }
  else if(request.url == "/cpus"){
    console.log(os.cpus());
    response.write("<h2>Cpus</h2>");
  }
  else if(request.url == "/number_of_cores"){
    console.log(os.cpus().length);
    response.write("<h2>Number of cores</h2>");
  }
  else if(request.url == "/home.html"){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fs.readFileSync('home.html'));
  }
  else{
    response.write("<h2>Not found</h2>");
  }

  response.end();
}).listen(3000);