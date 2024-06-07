var Input = document.getElementById("Code");
var Submit = document.getElementById("Submit");
var Texty = document.getElementById("Text123");

function CheckCode() {
  if (Input.value == "Tipetipetoe") {
    Texty.textContent =
      "Dm me a message saying _I decoded the Secret Reward Me_";
  } else {
    Texty.textContent = "False code xD";
  }
}
