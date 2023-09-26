var result=0;

var button_classic = document.getElementById("button_burger_classic");

button_classic.addEventListener("click", function(){
    result+=30;
    console.log(result);
});

var button_cheese = document.getElementById("button_burger_cheese");

button_cheese.addEventListener("click", function(){
    result+=32;
    console.log(result);
});

var button_bacon = document.getElementById("button_burger_bacon");

button_bacon.addEventListener("click", function(){
    result+=35;
    console.log(result);
});

var button_doubleBeef = document.getElementById("button_burger_doubleBeef");

button_doubleBeef.addEventListener("click", function(){
    result+=45;
    console.log(result);
});

var button_red = document.getElementById("button_burger_Red");

button_red.addEventListener("click", function(){
    result+=43;
    console.log(result);
});

var button_BBQ = document.getElementById("button_burger_BBQ");

button_BBQ.addEventListener("click", function(){
    result+=34;
    console.log(result);
});

var button_onion = document.getElementById("button_burger_onion");

button_onion.addEventListener("click", function(){
    result+=36;
    console.log(result);
});

var button_cheese2 = document.getElementById("button_burger_cheese2");

button_cheese2.addEventListener("click", function(){
    result+=40;
    console.log(result);
});

var button_wege = document.getElementById("button_burger_wege");

button_wege.addEventListener("click", function(){
    result+=37;
    console.log(result);
});

var button_chips = document.getElementById("button_chips");

button_chips.addEventListener("click", function(){
    result+=15;
    console.log(result);
});

var button_onion_rings = document.getElementById("button_onion_rings");

button_onion_rings.addEventListener("click", function(){
    result+=18;
    console.log(result);
});

//---------------------------------------------------------------------------

function showOrder(){
    var title = "Twoje zamówienie znajduje się poniżej!";

    var newWindow = window.open("", "_blank", "width=400, height=200");
    newWindow.document.write("<html><head><title>Twoje zamówienie</title></head><body>");
    newWindow.document.write("<h1>" + title + "</h1>");
    newWindow.document.write("<p> Do zapłaty: " + result + " zł</p>");
    newWindow.document.write("</body></html>");
}