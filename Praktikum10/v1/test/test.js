
const a = require("../models/persistence.js")
const http = require("http")

a.subscribe("https://feeds.megaphone.fm/FSI1483080183", () => {
    a.subscribe("https://workingdraft.de/feed/", () => {
        console.log("Podcasts importiert.");
    });
});

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/html; charset=utf-8"});


    const html = `<!DOCTYPE html>
            <html>
                <head>
                    <title>Podcast App Test</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Podcast App Test</h1>
                    <hr>
                    <h2>${a.podcasts[0].titel}</h2>
                    <p>${a.podcasts[0].beschreibung}</p>
                    <img src="${encodeURI(a.podcasts[0].bildUrl)}" width="100" height="100"> <br>
                    <ul>
                        ${createEpisodenListItems("eins")}
                    </ul>
                    <hr>
                    <h2>${a.podcasts[1].titel}</h2>
                    <p>${a.podcasts[1].beschreibung}</p>
                    <img src="${encodeURI(a.podcasts[1].bildUrl)}" width="100" height="100"> <br>
                    <ul>
                        ${createEpisodenListItems("zwei")}
                    </ul>
                </body>
            </html>`;

    res.end(html);
});


server.listen(8844, () => {
    console.log("Ich lausche auf http://localhost:8844");
});

function createEpisodenListItems(pod) {
    let result = "";
    if(pod === "eins"){
        for(let episode of a.podcasts[0].episoden){
            result += `<li>${episode.titel}</li>`;
        }
        return result;
    }
    if(pod === "zwei"){
        for(let episode of a.podcasts[1].episoden){
            result += `<li>${episode.titel}</li>`;
        }
        return result;
    }
}

