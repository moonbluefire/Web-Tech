
let check = true;

function getBild() {
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

const container = document.getElementById("wechsel");


const wechsel = function(check){
    if (check){
        document.querySelector("#btn").textContent = "Kachelansicht";
        document.getElementById("wechsel").classList.remove("kachel");

        container.replaceChildren(liste);

    } else {
        document.querySelector("#btn").textContent = "Listenansicht";

        document.getElementById("wechsel").classList.add("kachel");

        container.replaceChildren(kachel1, kachel2, kachel3, kachel4);
    }
};

document.querySelector("#btn").addEventListener("click", function(){  
    wechsel(check);
    check = !check;
});