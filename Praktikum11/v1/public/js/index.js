
/*const persistence = { podcasts: data};

let check = true;

const btn = document.getElementById("btn");
const container = document.getElementById("wechsel");
const br = document.createElement("br");

function getBild(podcast) {
    const bild = document.createElement("img");
    bild.src = podcast.bildUrl;
    bild.width = "100";
    bild.height = "100";
    return bild;
}

function createKachel(podcast){
    const kachel = document.createElement("a");
    kachel.href = "http://localhost:8020/podcast";
    kachel.id = `${podcast.titel.toLowercase().slice(0,8)}`;
    kachel.appendChild(getBild(podcast));
    kachel.appendChild(br);
    kachel.appendChild(document.createTextContent(podcast.titel));

    return kachel;
}

function createItems(podcast){
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = "http://localhost:8020/podcast";
    link.id = `${podcast.titel.toLowercase().slice(0,8)}`;
    link.createTextContent(`${podcast.titel} - ${podcast.episoden[0].titel.slice(0, 4)} Episoden`);
    item.appendChild(link);

    return item;
}

const kachel = persistence.podcasts.map((e) => createKachel(e));
const items = persistence.podcasts.map((e) => createItems(e));

const liste = document.createElement("ul");
liste.append(items);

btn.textContent = "Listenansicht";
container.classList.add("kachel");
container.append(kachel);

function wechsel(check) {
    if(check){
        btn.textContent = "Listenansicht";
        container.classList.remove("kachel");

        container.replaceChildren(liste);
    } else {
        btn.textContent = "Kachelansicht";
        container.classList.add("kachel");

        container.replaceChildren(kachel);
    }
}

btn.addEventListener("click", function(){  
    wechsel(check);
    check = !check;
});*/

let check = true;

/*function getBild() {
    const bild = document.createElement("img");
    bild.src = "./assets/img/offline_+_ehrlich_logo.jpg";
    bild.width = "100";
    bild.height = "100";
    return bild;
}

function getLink(id) {
    const link = document.createElement("a");
    link.href = "./podcast.html";
    if (id === "working") {
        link.textContent = "Working Draft - 10 Episoden";
    } else if (id === "offline") {
        link.textContent = "Offline + Ehrlich - 25 Episoden";
    } else if (id === "comfydences") {
        link.textContent = "Comfydences - 15 Episoden";
    } else if (id === "gymbros") {
        link.textContent = "Gym bros - 20 Episoden";
    }
    return link;
}

const kachel1 = document.createElement("a");
kachel1.href = "./podcast.html";
kachel1.appendChild(getBild());
kachel1.appendChild(document.createElement("br"));
kachel1.appendChild(document.createTextNode("Working Draft"));

const kachel2 = document.createElement("a");
kachel2.href = "./podcast.html";
kachel2.appendChild(getBild());
kachel2.appendChild(document.createElement("br"));
kachel2.appendChild(document.createTextNode("Offline + Ehrlich"));

const kachel3 = document.createElement("a");
kachel3.href = "./podcast.html";
kachel3.appendChild(getBild());
kachel3.appendChild(document.createElement("br"));
kachel3.appendChild(document.createTextNode("Comfydences"));

const kachel4 = document.createElement("a");
kachel4.href = "./podcast.html";
kachel4.appendChild(getBild());
kachel4.appendChild(document.createElement("br"));
kachel4.appendChild(document.createTextNode("Gym bros"));

const working = document.createElement("li");
working.id = "working";
working.appendChild(getLink("working"));

const offline = document.createElement("li");
offline.id = "offline";
offline.appendChild(getLink("offline"));

const comfydences = document.createElement("li");
comfydences.id = "comfydences";
comfydences.appendChild(getLink("comfydences"));

const gymbros = document.createElement("li");
gymbros.id = "gymbros";
gymbros.appendChild(getLink("gymbros"));

const liste = document.createElement("ul");
liste.id = "liste";
liste.append(working, offline, comfydences, gymbros);

document.querySelector("#btn").textContent = "Listenansicht";
document.getElementById("wechsel").classList.add("kachel");
document.getElementById("wechsel").append(kachel1, kachel2, kachel3, kachel4);

const container = document.getElementById("wechsel");*/

document.querySelector("#btn").textContent = "Listenansicht";
document.querySelector(".liste").style = "display: none;";


const wechsel = function(check){
    if (check){
        document.querySelector("#btn").textContent = "Kachelansicht";
        document.querySelector(".liste").style = "display: block;";
        document.querySelector(".kachel").style = "display: none;";

    } else {
        document.querySelector("#btn").textContent = "Listenansicht";
        document.querySelector(".liste").style = "display: none;";
        document.querySelector(".kachel").style = "display: block;";
    }
};

document.querySelector("#btn").addEventListener("click", function(){  
    wechsel(check);
    check = !check;
});