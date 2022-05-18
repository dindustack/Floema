const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  // res.render("index", {
  //   meta: {
  //     data: {
  //       title: "Floema",
  //       description: "Metadata description",
  //     },
  //   },
  // });
  res.render('pages/home')
});

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.get('/detail/:id', (req, res) => {
  res.render('pages/detail')
})

app.get('/collections', (req, res) => {
  res.render('pages/collections')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
