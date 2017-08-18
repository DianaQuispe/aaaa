var principal = document.getElementsByClassName("principal")[0];
var juego = document.getElementsByClassName("juego")[0];
var h2play = document.getElementsByClassName("h2-play")[0];
var jueguito=document.getElementById('juego');


h2play.onclick = function() {
    while (juego.firstChild) {
      juego.removeChild(juego.firstChild);
    }
    while (principal.firstChild) {
      principal.removeChild(principal.firstChild);
    }
    principal.className = "nuevito"
    agregar();
}
function agregar() {
    principal.innerHTML='';
    principal.style.height='600px';
    jueguito.style.display='none';
    var divGrande = document.createElement("div");
    divGrande.setAttribute("id","divGrande");
    var divdeTexto = document.createElement("div");
    var divdeButtons = document.createElement("div");
    divGrande.appendChild(divdeTexto);
    divGrande.appendChild(divdeButtons);
    divdeButtons.setAttribute("id","divdeButton")
    var B1 = document.createElement("button");
    B1.innerHTML = "★ Start Game";
    B1.setAttribute("onclick", "startGame()");
    B1.setAttribute("class","button");
    var B2 = document.createElement("button");
    B2.innerHTML = "★ Instructions";
    B2.setAttribute("onclick", "instructions()");
    B2.setAttribute("class","button");
    var B3 = document.createElement("button");
    B3.innerHTML = "★ Credits";
    B3.setAttribute("onclick", "credits()");
    B3.setAttribute("class","button");
    divdeButtons.appendChild(B1);
    divdeButtons.appendChild(B2);
    divdeButtons.appendChild(B3);
    divdeTexto.setAttribute("id","divdeTexto");
    divdeTexto.innerHTML += "Road Blocks";
    principal.appendChild(divGrande);
}
function startGame() {
    level=1;
    s=mapas.length-1;
    mapa=mapas[s];
    var B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML = "Menu";
    B4.setAttribute("class","button");
    jueguito.style.display='block';
    var nuevito = document.getElementsByClassName("nuevito")[0];
        while (nuevito.firstChild) {
      nuevito.removeChild(nuevito.firstChild);
    }
    nuevito.appendChild(B4);
    nuevito.style.height='50px';

    iniciar();
    generarMapa(map);
    isrunning=false;
}
function instructions() {
    var B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML = "Menu";
    B4.setAttribute("class","button");
    var divdeParrafo = document.createElement("div");
    divdeParrafo.style.fontFamily = 'Orbitron';
    divdeParrafo.setAttribute("class","divdeParrafo");
    divdeParrafo.innerHTML = "<h1> INSTRUCTIONS<span> &#160; </span> </h1>";
    divdeParrafo.innerHTML += "<h4> Ayuda a la nave a aterrizar en un planeta, evita chocar y ayudate de los agujeros negros</h4>";
    divdeParrafo.innerHTML += "<h4> Tienes que usar los botones del teclado para poder jugar. En total hay seis niveles uno mas complicado que el otro... Te deseo mucha suerte! </h4>";
       var nuevito = document.getElementsByClassName("nuevito")[0];
     while (nuevito.firstChild) {
      nuevito.removeChild(nuevito.firstChild);
    }
    nuevito.appendChild(B4);
    nuevito.appendChild(divdeParrafo)
}
function credits() {
    var B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML += "Menu";
    B4.setAttribute("class","button");
    var divdeCredits = document.createElement("section");
    divdeCredits.style.fontFamily = 'Orbitron';
    divdeCredits.setAttribute("class","star-wars");
    var divdV = document.createElement("div");
    divdV.setAttribute("class","crawl");
    var divtitle = document.createElement("div");
    divtitle.setAttribute("class","title");
    var h1 = document.createElement("h1");
    var textoh1 = document.createTextNode("CREDITS");
    h1.appendChild(textoh1);
    divtitle.appendChild(h1);
    var p = document.createElement("p");
    p.innerHTML='Melanie Laura Ocharan Cardenas<br>Diana Quispe Ccallo'
    divdV.appendChild(divtitle);
    divdV.appendChild(p);
    divdeCredits.appendChild(divdV);
    var nuevito = document.getElementsByClassName("nuevito")[0];
        while (nuevito.firstChild) {
      nuevito.removeChild(nuevito.firstChild);
    }
         nuevito.appendChild(divdeCredits);
        nuevito.appendChild(B4);
}
