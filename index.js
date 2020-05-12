const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static('views'))
app.listen(process.env.PORT || 3000);

app.get("/", function(req, res) {
    res.render("home.ejs")
})