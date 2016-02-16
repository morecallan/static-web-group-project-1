var addButton = document.getElementById("addButton");

var cardholderDiv = document.getElementById("cardHolder");

var fontColor = document.getElementById("fontColor");
var backgroundColor = document.getElementById("backgroundColor");

var deleteButton = document.getElementById("deleteButton");

addButton.addEventListener("click", addCard);

function addCard() {
    var inputText = document.getElementById("inputText").value;
    var cardInput = "<article class='card'>";
    cardInput += "<input type='color' name='fontColor' value='#ff0000'>";
    cardInput += "<label for='fontColor'>Font Color</label>";
    cardInput += "<input type='color' name='backgroundColor' value='#ff0000'>";
    cardInput += "<label for='backgroundColor'>Background Color</label>";
    cardInput += "<button type='' class='deleteButton'>Delete</button>";
    cardInput += "<p>" + inputText + "</p>";
    cardInput += "</article>";

    cardholderDiv.innerHTML = cardInput + cardholderDiv.innerHTML;
}