


var add_text1 = function() {
  var documentation_text = document.getElementById("documentation_id");

  var text = document.getElementById("text").value;

  documentation_text.innerHTML = documentation_text.innerHTML + 
  " Pre programmed unchangeable text + what you wrote: " + text;
}


var add_text2 = function() {
  var documentation_text = document.getElementById("documentation_id");

  documentation_text.innerHTML = documentation_text.innerHTML + "Clicked button add_text2";

}

var custom_text = function() {
  var documentation_text = document.getElementById("documentation_id");

  var custom = document.getElementById("custom").value;

  documentation_text.innerHTML = documentation_text.innerHTML + custom + " ";

}

