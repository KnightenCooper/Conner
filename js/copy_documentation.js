

function copy_documentation() {
  /* Get the documentation text*/
  var documentation_text = document.getElementById("documentation_id");

  /* Copy the documentation text so users can paste it into the necessary app*/
  navigator.clipboard.writeText(documentation_text.innerHTML);
}