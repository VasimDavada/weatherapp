let express = require("express");
let app = express();
let port = 8000;
let path = require("path");
let hbs = require("hbs");

let staticPath = path.join(__dirname, '../public');
let templatePath = path.join(__dirname, '../templates/views');
let partialsPath = path.join(__dirname, '../templates/partials')

app.set('views', templatePath);
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render('index');
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errMsg: 'Oops! Page Not Found',
  });
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
