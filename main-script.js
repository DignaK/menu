let items = [
    "PASTA",
    "RAMEN",
    "SOUP",
    "STEAK",
    "SUSHI",
]

let div1 = document.querySelector("div");

for(i=0;i<items.length;i++){
    let h1 = document.createElement("h1");
    h1.className = "items";
    h1.innerText = items[i];
    div1.append(h1);
}

let menu = [];

let div2 = document.querySelector("div.menu-items");

$(document).ready(function(){
    $("h1.items").hover(
        function(){ //mouseenter
        $(this).css("background-color","rgb(252, 211, 27)")
    },
    function(){ // mouseleave
        $(this).css("background-color","rgb(92, 68, 68)")
    });
    $("h1.items").click(function (){
        $(this).hide();
        let h2 = document.createElement("h1");
        h2.className = "items-n-delete";
        h2.innerText = $(this).innerText;
        div2.append(h2);
    })
});