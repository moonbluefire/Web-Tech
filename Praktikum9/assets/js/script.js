const getViewportWidth = () => window.innerwidth || document.documentElement.clientWidth;

console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()}px.`);

console.log(screen.width * 0.3);

//if(getViewportWidth() < (screen.width * 0.3)){
//    alert(`Die verfügbare Fensterbreite (${getViewportWidth()}px) ist zu niedrig.`);
//}

function Podcast(titel, beschreibung, autor, besitzerName, besitzerEmail, bildUrl, feedUrl, kategorien, letztesUpdate) {
    this.titel = titel;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.besitzerName = besitzerName;
    this.besitzerEmail = besitzerEmail;
    this.bildUrl = bildUrl;
    this.feedUrl = feedUrl;
    this.kategorien = kategorien;
    this.letztesUpdate = letztesUpdate;
    this.episoden = [];
    this.addEpisoden = function(episode) {
        this.episoden.push(episode);
        this.episoden.sort((a, b) => b.datum - a.datum);
    }
}

function Episode(titel, beschreibung, dauer, datum){
    this.titel = titel;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = datum;
    this.getDauerInStundenUndMinuten = function() {
        return `${Math.floor(this.dauer / 3600000)} Stunden und ${(this.dauer % 3600000)/60000} Minuten`;
    }
}

function EpisodeAudio(url, groesse, typ){
    this.url = url;
    this.groesse = groesse;
    this.typ = typ;
}


let podcast1 = new Podcast(
    "TechTalk",
    "Ein Podcast über die neuesten Technologien.",
    "Max Mustermann",
    "Max Mustermann",
    "max.mustermann@example.com",
    "techtalk.jpg",
    "http://techtalk.example.com/feed",
    ["Technologie", "Innovation"],
    new Date("2024-06-01")
);

let podcast2 = new Podcast(
    "GeschichtenZeit",
    "Spannende Geschichten aus aller Welt.",
    "Erika Musterfrau",
    "Erika Musterfrau",
    "erika.musterfrau@example.com",
    "geschichtenzeit.jpg",
    "http://geschichtenzeit.example.com/feed",
    ["Geschichten", "Kultur"],
    new Date("2024-05-15")
);

let episode1 = new Episode(
    "Die Zukunft der KI",
    "Eine Diskussion über die neuesten Entwicklungen in der Künstlichen Intelligenz.",
    5400000,
    new Date("2024-06-05")
);

let episode2 = new Episode(
    "Abenteuer im Dschungel",
    "Erzählungen von aufregenden Expeditionen im Dschungel.",
    2700000,
    new Date("2024-05-20")
);

let episode3 = new Episode(
    "Blockchain erklärt",
    "Grundlagen und Anwendungen der Blockchain-Technologie.",
    3600000,
    new Date("2024-06-10")
);

let episode4 = new Episode(
    "Mythen und Legenden",
    "Eine Reise durch die faszinierendsten Mythen und Legenden der Welt.",
    3000000,
    new Date("2024-05-25")
);

podcast1.addEpisoden(episode1);
podcast1.addEpisoden(episode3);
podcast2.addEpisoden(episode2);
podcast2.addEpisoden(episode4);

let podcasts = [podcast1, podcast2];

podcasts.forEach(function(podcast){
    console.log(`${podcast.titel}:`);
    podcast.episoden.forEach(function(episode){
        console.log(`- ${episode.titel} (${episode.getDauerInStundenUndMinuten()})`);
    })
});