function onProcess() {
  let input = document.getElementById("input").value;

  if (!input) {
    alert("Invalid input");
  }

  let output;
  output = input.replace(/(?:\r\n|\r|\n)/g, "<br>");

  document.getElementById("output").value = output;
}
function copy() {
  let textarea = document.getElementById("output");
  textarea.select();
  document.execCommand("copy");
}
