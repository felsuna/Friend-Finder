const path = require("path");

module.exports = (app) => {
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));

    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "./app/public/survery.html"))
    });
};

