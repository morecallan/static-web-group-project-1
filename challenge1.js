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
    var fontColorString = "fontColor" + num;
    var backgroundColorString = "backgroundColor" + num;
    var deleteButtonString = "deleteButton" + num;
    console.log("fontColorString", fontColorString);
    fontColor = document.getElementById(fontColorString);
    console.log("fontColor", fontColor);
    backgroundColor = document.getElementById(backgroundColorString);
    deleteButton = document.getElementById(deleteButtonString);


    fontColor.addEventListener("focusin", setFontColor);
    backgroundColor.addEventListener("focusin", setBackgroundColor);
    // deleteButton.addEventListener("click", deleteCard);

    num++;

}

function createEventHandlers(cardId) {
    

    fontColor.addEventListener("focusin", setFontColor);
    backgroundColor.addEventListener("focusin", setBackgroundColor);
    deleteButton.addEventListener("click", deleteCard);
}


function setFontColor() {
    var colorYouWant = this.value;
    console.log("colorYouWant", colorYouWant);
    var fingersCrossed = this.parentNode;
    console.log("fingersCrossed", fingersCrossed);
    fingersCrossed.style.color = colorYouWant;
}

function setBackgroundColor() {
    var colorYouWant = fontColor.value;
    console.log("colorYouWant", colorYouWant);
    var fingersCrossed = this.parentNode;
    console.log("fingersCrossed", fingersCrossed);
}