const parser = require("./podcastParser");

// [TODO]
// Copy your code for the objects "Podcast", "Episode", and "EpisodeAudio"
// from lab assignment 8 here (without example data!)

function Podcast(titel, beschreibung, autor, besitzerName, besitzerEmail, bildUrl, feedUrl, feed, kategorien, letztesUpdate) {
    this.titel = titel;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.besitzerName = besitzerName;
    this.besitzerEmail = besitzerEmail;
    this.bildUrl = bildUrl;
    this.feedUrl = feedUrl;
    this.feed = feed;
    this.kategorien = kategorien;
    this.letztesUpdate = letztesUpdate;
    this.episoden = [];
    this.addEpisoden = function(episode) {
        this.episoden.push(episode);
        this.episoden.sort((a, b) => b.datum - a.datum);
    }
    this.feed.episodes.map((element) => {
      return new Episode(element.title, element.description, element.duration, element.pubDate, element.link, element.enclosure);
    }).forEach((e) => this.addEpisoden(e));
}

function Episode(titel, beschreibung, dauer, datum, url, enclosure){
    this.titel = titel;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = datum;
    this.url = url;
    this.audio = [];
    this.enclosure = enclosure;
    this.addAudio = function(audio) {
        this.audio.push(audio);
    }
    this.getDauerInStundenUndMinuten = function() {
        return `${Math.floor(this.dauer / 3600000)} Stunden und ${(this.dauer % 3600000)/60000} Minuten`;
    }

    this.addAudio(new EpisodeAudio(this.enclosure.url, this.enclosure.length, this.enclosure.type))
}

function EpisodeAudio(url, groesse, typ){
    this.url = url;
    this.groesse = groesse;
    this.typ = typ;
}

const podcasts = [];

/**
 * Subscribes to a podcast by importing the data from the given feed URL.
 * The import itself is asynchronous, so a callback function is needed for subsequent actions.
 *
 * @param {String} url The feed URL of the podcast to subscribe to.
 * @param {Function} callback Callback function to be called after the import is complete.
 */
function subscribe(url, callback) {
  parser.parseFeed(url, (feed) => {
    podcasts.push(convert(url, feed));
    if (callback) callback();
  });
}

/**
 * Converts the feed data imported from a URL into data objects (Podcast, Episode, EpisodeAudio)
 * suitable for this web application.
 *
 * @param {String} url The feed URL of the podcast from which it was imported.
 * @param {Object} feed Feed object according to https://www.npmjs.com/package/podcast-feed-parser#default
 */
function convert(url, feed) {
  // [TODO]
  // Implement function

  //console.log({url, feed});
  //console.log(feed.meta.owner);

  const podcast = new Podcast(
    feed.meta.title,
    feed.meta.description,
    feed.meta.author,
    feed.meta.owner.name,
    feed.meta.owner.email,
    feed.meta.imageURL,
    url,
    feed,
    feed.meta.categories,
    feed.meta.lastUpdated
  );

  return podcast;

}

// [TODO]
// Define the module interface: make the podcasts array and subscribe function accessible from outside

module.exports.podcasts = podcasts;
module.exports.subscribe = subscribe;