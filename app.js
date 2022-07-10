require('dotenv').config()

const fetch = require('node-fetch');
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const Prismic = require('@prismicio/client')
const PrismicH = require('@prismicio/helpers')

// Initialize the prismic.io api
const initApi = (req) => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};

// Link Resolver
const handleLinkResolver = (doc) => {
  if (doc.type === 'product') {
    return `/detail/${doc.slug}`;
  }

  if (doc.type === 'collections') {
    return '/collections';
  }

  if (doc.type === 'about') {
    return `/about`;
  }

  // Default to homepage
  return '/';
};


app.use((req, res, next) => {
  res.locals.ctx = {
    PrismicH,
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver,
  }
  next()
})

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
  res.render("pages/home");
});

app.get('/about', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);

  res.render('pages/about', {
    ...defaults,
  });
});

app.get("/detail/:uid", (req, res) => {
  res.render("pages/detail");
});

app.get("/collections", (req, res) => {
  res.render("pages/collections");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
