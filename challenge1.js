var num = 0;
var name = "idName"

var addButton = document.getElementById("addButton");

var cardholderDiv = document.getElementById("cardHolder");


var fontColor;
var backgroundColor;
var deleteButton;

addButton.addEventListener("click", addCard);

function addCard() {
    var inputText = document.getElementById("inputText").value;
    var cardInput = "<article class='card' id='" + name + num + "'>";
    cardInput += "<input type='color' id='fontColor" + num +  "'>";
    cardInput += "<label for='fontColor'>Font Color</label>";
    cardInput += "<input type='color' id='backgroundColor" + num +  "'>";
    cardInput += "<label for='backgroundColor'>Background Color</label>";
    cardInput += "<button type='' id='deleteButton" + num + "'>Delete</button>";
    cardInput += "<p>" + inputText + "</p>";
    cardInput += "</article>";

    cardholderDiv.innerHTML = cardInput + cardholderDiv.innerHTML;
    // var fontColorString = "fontColor" + num;
    // var backgroundColorString = "backgroundColor" + num;
    // var deleteButtonString = "deleteButton" + num;
    // console.log("fontColorString", fontColorString);
    // fontColor = document.getElementById(fontColorString);
    // console.log("fontColor", fontColor);
    // backgroundColor = document.getElementById(backgroundColorString);
    // deleteButton = document.getElementById(deleteButtonString);


    // fontColor.addEventListener("blur", setFontColor);
    // backgroundColor.addEventListener("focus", setBackgroundColor);
    // deleteButton.addEventListener("click", deleteCard);

    num++;

}

function createEventHandlers(cardId) {
    

    fontColor.addEventListener("focusin", setFontColor);
    backgroundColor.addEventListener("focusin", setBackgroundColor);
    deleteButton.addEventListener("click", deleteCard);
}


function setFontColor(idOfClick) {
    var colorYouWant = document.getElementById(idOfClick).value
    console.log("colorYouWant", colorYouWant);
    var somethingNew = name + idOfClick.substring(12,idOfClick.length-1)
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


var holder = document.querySelector("#cardHolder")
holder.addEventListener("click", function(e) {
    console.log("e", e.target);
    var clickedItem = e.target.id;
    if (clickedItem.substring(0,4) === "font") {
        console.log("clickedItem", clickedItem);
        setFontColor(clickedItem)
    } else if (clickedItem.substring(0,4) === "back") {
        console.log("clickedItem", clickedItem);
        setBackgroundColor(clickedItem)
    } else if (clickedItem.substring(0,6) === "delete") {
        console.log("clickedItem", clickedItem);
    };

    e.stopPropagation();
});