

document.getElementById("documentation_id").innerHTML = localStorage.getItem("documentation_key"); // update the local storage value so it contains the added custom activity text



//Add "Played a Board Game" to Service Documentation ------ WORK IN PROGRESS ------ 
var add_board_game = function() {
  var documentation_text = document.getElementById("documentation_id");

  var name_of_board_game = document.getElementById("name_of_board_game").value;

  documentation_text.innerHTML = documentation_text.innerHTML + 
  "I asked Conner if he wanted to play a board game. Conner signed yes. I encouraged Conner to pick a game from the cupboard. Conner picked the board game " + name_of_board_game 
  + ". I played the board game " + name_of_board_game + " with Conner. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added board game text
}

//Add "helped prepare meal" to Service Documentation ------ WORK IN PROGRESS ------ 
var meal = function() {
  var documentation_text = document.getElementById("documentation_id");

  var name = document.getElementById("name").value;

  var ingredients = document.getElementById("ingredients").value;

  var meal_time = document.getElementById("meal_time").value;

  var cooking_process = document.getElementById("cooking_process").value;

  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner is he wanted to eat " + meal_time + ". Conner signed yes. I asked Conner if he wanted to eat " + name + 
  ". Conner signed yes. I used pointing and verbally encouraged Conner to get out the " + ingredients + ". " + cooking_process + " I encouraged Conner to do his dishes. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added meal text
}

//Add "helped Conner shower" to Service Documentation ------ WORK IN PROGRESS ------ 
var shower = function() {
  var documentation_text = document.getElementById("documentation_id");

  documentation_text.innerHTML = documentation_text.innerHTML + "I encouraged Conner to take a bath. I rinsed Conner and gave him a soapy sponge. I sponged the areas Conner missed. I added shampoo "
  + "to Conner’s head. I turned on the handheld shower head and handed it to Conner. I rinsed the areas Conner missed. I gave Conner a towel. I dried the areas Conner missed. " 
  + "I encouraged Conner to put his clothes on. I made sure Conner got fully dressed. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added shower text
}

//Add "Custom Activity" to Service Documentation ------ WORK IN PROGRESS ------ 
var custom = function() {
  var documentation_text = document.getElementById("documentation_id");

  var custom = document.getElementById("custom").value;

  documentation_text.innerHTML = documentation_text.innerHTML + custom + " ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added custom activity text
}

//Code to store current documentation in Local Storage ------ WORK IN PROGRESS ------ 
// function set() {
//   localStorage.setItem("mykey","myvalue");
// }

// function get() {
//   localStorage.getItem("mykey");
// }

var clear_all_text = function() {
  localStorage.removeItem("documentation_key");
  document.getElementById("documentation_id").innerHTML = localStorage.getItem("documentation_key"); // update the local storage value so it contains the added custom activity text
}
// Source on how to use local storage: https://www.freecodecamp.org/news/how-to-store-data-in-web-browser-storage-localstorage-and-session-storage-explained/

