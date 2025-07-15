const express = require("express");

const app = express();

const fileOptions = {
    root: __dirname
};

app.get("/", (req, res) => serveMain(res));
app.get("/about", (req, res) => serveAbout(res));
app.get("/contact-me", (req, res) => serveContact(res));

app.use((req, res, next) => serve404(res));

const PORT = 8080;

app.listen(PORT);

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
    result.status(404);
    returnPage('404.html', result);
}

function returnPage(pageName, result)
{
    result.sendFile(pageName, fileOptions);
}