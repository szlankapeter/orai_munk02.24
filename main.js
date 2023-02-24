window.addEventListener("load", init);

function init() {
    const tartalom = document.getElementById("tartalom");
    const tartalomMaskepp = document.querySelector("#tartalom");
    const tartalomMaskepp2 = document.querySelector(".tart")
    const tartalomMaskepp3 = document.getElementsByClassName("tart");
    const tartalomElemEz = document.querySelectorAll(".tart");
    console.log(tartalomElemEz);
    //tartalomElemEz[1].innerHTML="<p>valami</p>"

    let lista = ["palacsinta", "milánói", "almás pite"]

    listaki(lista);
    kepek();
}

function listaki(lista) {
    var ul = document.createElement("ul");
    for (let i = 0; i < lista.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(lista[i]));
        ul.appendChild(li);
    }
    tartalom.appendChild(ul);
}

function kepek() {
    var article = document.createElement("article");
    const imgages = ["Névtelen.png", "Névtelen2.png", "Névtelen3.png","Névtelen.png", "Névtelen2.png", "Névtelen3.png","Névtelen.png", "Névtelen2.png", "Névtelen3.png","Névtelen.png", "Névtelen2.png", "Névtelen3.png","Névtelen.png", "Névtelen2.png", "Névtelen3.png","Névtelen.png", "Névtelen2.png", "Névtelen3.png","Névtelen.png", "Névtelen2.png"]
    for (let i = 0; i < imgages.length; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = imgages[i];
        div.appendChild(img);
        article.appendChild(div);
    }
    document.body.appendChild(article);
}