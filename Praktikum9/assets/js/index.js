
let check = true;

const wechsel = function(check){
    if (check){
        document.querySelector("#btn").textContent = "Kachelansicht";
        document.getElementById("wechsel").class = "";
    } else {
        document.querySelector("#btn").textContent = "Listenansicht";

        const bild = document.createElement("img");
        bild.src = "./assests/img/offline_+_ehrlich_logo.jpg";
        bild.width = "100";
        bild.height = "100";

        const kachel1 = document.createElement("a");
        kachel1.href = "./podcast.html";
        kachel1.appendChild(bild);
        kachel1.appendChild(document.createTextNode("Offline + Ehrlich"));


        document.getElementById("wechsel").after();
        document.getElementById("wechsel").script = "display: flex; flex-flow: row wrap; justify-content: flex-start; gap: 15px;";
    }
};

document.querySelector("#btn").addEventListener("click", function(){
    console.log("Klick");    
    wechsel(check);
    check = !check;
});