
const persistence = data;

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
liste.appendChildren(items);

btn.textContent("Listenansicht");
container.classList.add("kachel");
container.appendChild(kachel);

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
});