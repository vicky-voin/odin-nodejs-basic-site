const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer();

server.on('request', (request, res) => 
{
    if(request.url == "/")
    {
        serveMain(res);
    }
    else if(request.url == '/about')
    {
        serveAbout(res);
    }
    else if(request.url == '/contact-me')
    {
        serveContact(res);
    }
    else
    {
        serve404(res);
    }
});

server.listen(8080);

function serveMain(result){
    returnPage('index.html', result);
}

function serveAbout(result){
    returnPage('about.html', result);
}

function serveContact(result){
    returnPage('contact-me.html', result);
}

function serve404(result)
{
    returnPage('404.html', result);
}

function returnPage(pageName, result)
{
    fs.readFile(pageName, (err, data) =>
    {
        if(err)
        {
            result.writeHead(500, {'Content-Type': 'application/json'});
            result.end();
        }
        else
        {
            result.writeHead(200, {'Content-Type': 'text/html'});
            result.end(data);
        }
    })
}