function onProcess() {
  let input = document.getElementById("input").value;

  if (!input) {
    // Null or undefined or bad input
    alert("Invalid input");
  }

  let output = "";

  // Replace line-breaks with "\n"
  output = input.replace(/(?:\r\n|\r|\n)/g, "<br>");

  document.getElementById("output").value = output;
}
function copy() {
  let textarea = document.getElementById("output");
  textarea.select();
  document.execCommand("copy");
}
