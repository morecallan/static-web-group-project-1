var num = 0;
var name = "idName"

var addButton = document.getElementById("addButton");

var cardholderDiv = document.getElementById("cardHolder");

var fontColor;
var backgroundColor;
var deleteButton;

addButton.addEventListener("click", addCard);

//Adds card (with buttons and color inputs) to DOM
function addCard() {
    var inputText = document.getElementById("inputText").value;
    var cardInput = "<article class='card' id='" + name + num + "'>";
    cardInput += "<div class='cardChangeUp'>";
    cardInput += "<div class='colorChangeUp'>";
    cardInput += "<input type='color' id='fontColor" + num +  "'>";
    cardInput += "<label for='fontColor" + num +"'>Font</label>";
    cardInput += "<input type='color' id='backgroundColor" + num +  "'>";
    cardInput += "<label for='backgroundColor" + num + "'>Background</label>";
    cardInput += "</div>";
    cardInput += "<button type='' id='deleteButton" + num + "'>DELETE</button>";
    cardInput += "</div>";
    cardInput += "<p id='input" + num + "'>" + inputText + "</p>";
    cardInput += "</article>";

    cardholderDiv.innerHTML = cardInput + cardholderDiv.innerHTML;

    num++;

}


function setFontColor(idOfClick) {
    var colorYouWant = document.getElementById(idOfClick).value
    console.log("colorYouWant", colorYouWant);
    var somethingNew = "input" + idOfClick.substring(12,idOfClick.length-1)
    console.log("somethingNew", somethingNew);
    var fingersCrossed = document.getElementById(somethingNew)
    fingersCrossed.style.color = colorYouWant;
}

function setBackgroundColor(idOfClick) {
    var colorYouWant = document.getElementById(idOfClick).value
    console.log("colorYouWant", colorYouWant);
    var somethingNew = name + idOfClick.substring(15,idOfClick.length)
    console.log("somethingNew", somethingNew);
    var fingersCrossed = document.getElementById(somethingNew)
    fingersCrossed.style.backgroundColor = colorYouWant;
}

function deleteDatShit(idOfClick) {
    var somethingNew = name + idOfClick.substring(12,idOfClick.length);
    console.log("somethingNew", somethingNew);
    var parentOfDeleteButton = document.getElementById(somethingNew);
    cardholderDiv.removeChild(parentOfDeleteButton);
}

//Sets up parent container to handle click events for cards
var holder = document.querySelector("#cardHolder");

//Creates event listeners for color value types 
holder.addEventListener("focusin", function(e) {
    console.log("e", e.target);
    var clickedItem = e.target.id;
    if (clickedItem.substring(0,4) === "font") {
        console.log("clickedItem", clickedItem);
        setFontColor(clickedItem)
    } else if (clickedItem.substring(0,4) === "back") {
        console.log("clickedItem", clickedItem);
        setBackgroundColor(clickedItem)
    }
    e.stopPropagation();
});

//Creates event handler for delete button
holder.addEventListener("click", function(e){
    console.log("e", e.target);
    var clickedItem = e.target.id;
    if (clickedItem.substring(0,6) === "delete") {
        console.log("clickedItem", clickedItem);
        deleteDatShit(clickedItem)
    };
    e.stopPropagation();
});