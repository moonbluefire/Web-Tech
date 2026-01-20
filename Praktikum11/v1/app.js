
const express = require("express");
const router = require("./routes/routes.js");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(router);

app.use((req, res, next) => {
    res.status(404).render("fehlerseite");
});

app.listen(8020, () => {
    console.log("Ich lausche auf http://localhost:8020");
});