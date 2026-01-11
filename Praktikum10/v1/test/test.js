
const a = require("../models/persistence.js")

const url = "https://feeds.megaphone.fm/FSI1483080183" // Deine URL
a.subscribe(url, () => {});

a.podcasts.forEach((podcast) => {
    console.log(`${podcast.titel}`);
});