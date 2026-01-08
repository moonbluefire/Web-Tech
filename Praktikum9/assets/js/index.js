
let check = true;

function getBild() {
    const bild = document.createElement("img");
    bild.src = "./assets/img/offline_+_ehrlich_logo.jpg";
    bild.width = "100";
    bild.height = "100";
    return bild;
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


const wechsel = function(check){
    if (check){
        document.querySelector("#btn").textContent = "Kachelansicht";
        document.getElementById("wechsel").classList.remove("kachel");
    } else {
        document.querySelector("#btn").textContent = "Listenansicht";

        document.getElementById("wechsel").classList.add("kachel");

        document.getElementById("wechsel").append(kachel1, kachel2, kachel3, kachel4);
    }
};

document.querySelector("#btn").addEventListener("click", function(){
    console.log("Klick");    
    wechsel(check);
    check = !check;
});