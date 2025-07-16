const express = require("express");
const path = require("node:path");

const app = express();

const assetPath = path.join(__dirname, "public");

app.use(express.static(assetPath));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about", {title:"About"}));
app.get("/contact-me", (req, res) => res.render("contact-me"));

app.use((req, res, next) => res.render("404"));

const PORT = 8080;

app.listen(PORT);