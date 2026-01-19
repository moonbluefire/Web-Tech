const express = require("express");
// [TODO]
// Include other required modules
const persistence = require("../models/persistence.js");

const router = express.Router();

router.get("/", function (req, res) {
  // [TODO]
  // Implement: Display list of subscribed podcasts
  console.log("B");
  res.render("index", { podcasts : persistence.podcasts});
});

router.get("/podcast", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the podcast with the given
  // index (index is provided as a request/query parameter,
  // access with: req.query.pc)
  const query = req.query.pc;
  const podcast = "";

  for(let pod in persistence.podcasts){
    const titel = pod.titel.toLowercase().slice(0,8);

    if(titel === query){
      podcast = pod;
    }
  }

  res.render("podcast", {pod : podcast});
});

router.get("/episode", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the episode (indices
  // are provided as request/query parameters, access with:
  // req.query.pc and req.query.ep)
  const query = req.query.pc;
  const epi = req.query.ep.slice(0,4);

  const podcast = "";
  const episode = "";

  for(let pod in persistence.podcasts){
    const titel = pod.titel.toLowercase().slice(0,8);

    if(titel === query){
      podcast = pod;
    }
  }

  for(let ep in podcast.episoden){
    const titel = ep.titel.slice(0,4);

    if(titel === epi){
      episode = epi;
    }
  }

  res.render("episode", {pod : podcast, ep : episode});
});

router.post("/subscribe", function (req, res) {
  // [TODO]
  // Implement: Subscribe to a podcast
  //console.log(req.body);

  persistence.subscribe(encodeURI(req.body.pcurl));
  console.log("A");
  res.redirect("/");
});

module.exports = router;
