
 // update the local storage value so it contains the added custom activity text
document.getElementById("documentation_id").innerHTML = localStorage.getItem("documentation_key");

  // funciton to increase the counter for API variable with api link as parameter
  function increase_counter(link) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", link);
  xhr.responseType = "json";
  xhr.send();
  }

//Add "Played a Board Game" to Service Documentation 
var add_board_game = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  var name_of_board_game = document.getElementById("name_of_board_game").value;// gets the user inputted name of the board game
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + 
  "I asked Conner if he wanted to play a board game. Conner signed yes. I encouraged Conner to pick a game from the cupboard. Conner picked the board game " + name_of_board_game 
  + ". I played the board game " + name_of_board_game + " with Conner. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added board game text

  document.getElementById("name_of_board_game").value = ""; // empty all input boxes so user knows it submitted

  increase_counter("https://api.countapi.xyz/hit/boardgame/8493461e-1bd0-4a5c-9b9b-8d6817248684"); // Increase the counter for number of board games played this month
}

//Add "helped prepare meal" to Service Documentation 
var meal = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  var name = document.getElementById("name").value; // gets the user input for the name of food
  var meal_time = document.getElementById("meal_time").value; // gets the user input for whether the meal was breakfast, lunch, dinner or a snack
  var cooking_process = document.getElementById("cooking_process").value; // gets the user input for the process the assistant did to help Conner
// below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner is he wanted to eat " + meal_time + ". Conner signed yes. I asked Conner if he wanted to eat " + name + 
  ". Conner signed yes. " + cooking_process + " I encouraged Conner to do his dishes. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added meal text
  document.getElementById("name").value = ""; // empty all input boxes so user knows it submitted
  document.getElementById("cooking_process").value = ""; // empty all input boxes so user knows it submitted

  increase_counter("https://api.countapi.xyz/hit/meal/c4496462-07fa-411f-ad14-784d369d9c44"); // Increase the counter for number assisted meals this month
}

//Add "helped Conner shower" to Service Documentation 
var shower = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I encouraged Conner to take a bath. I rinsed Conner and gave him a soapy sponge. I sponged the areas Conner missed. I added shampoo "
  + "to Conner’s head. I turned on the handheld shower head and handed it to Conner. I rinsed the areas Conner missed. I gave Conner a towel. I dried the areas Conner missed. " 
  + "I encouraged Conner to put his clothes on. I made sure Conner got fully dressed. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added shower text
  
  increase_counter("https://api.countapi.xyz/hit/shower/00dfe849-fb32-41d2-b742-5f79d28eeb25"); // Increase the counter for number assisted showers this month
}

//Add "walked with Conner" to Service Documentation 
var walk = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to go for a walk. Conner signed yes. " + 
  "I walked with Conner. I made sure Conner didn’t run in front of cars. At intersections, I asked Conner which way he wanted to go. Conner pointed in the direction he wanted to walk." + 
  " I guided Conner home. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added shower text

  increase_counter("https://api.countapi.xyz/hit/walk/d5093da7-e42f-4fbe-8211-d05b2417ca83"); // Increase the counter for number assisted walks this month
}

//Add "Custom Activity" to Service Documentation 
var custom = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  var custom = document.getElementById("custom").value;// gets the user input for the custom activity text
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + custom + " ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added custom activity text
  document.getElementById("custom").value = ""; // empty all input boxes so user knows it submitted
}

//Add "drive to park" to Service Documentation 
var add_drive_park = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  var name_of_park = document.getElementById("name_of_park").value;// gets the current user input for the park name
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + 
  "I asked Conner if he wanted to go on a drive to "+name_of_park + ". Conner signed yes. I took Conner to " + name_of_park +". I walked around with Conner." 
  + " At intersections, I asked Conner which way he wanted to go and gestured by pointing both ways. Conner pointed to show where he wanted to go. I supervised Conner during the community outing because he is a flight risk. I guided Conner back to the car. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the added park text

  document.getElementById("name_of_board_game").value = ""; // empty all input boxes so user knows it submitted

  increase_counter("https://api.countapi.xyz/hit/park/a83d4632-7147-4fe6-bba0-b35f3899661d"); // Increase the counter for number assisted meals this month
}

//Add "took conner home" to Service Documentation 
var go_home = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I took Conner home. ";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the going home text
}

//Add "go to lake springfield" to Service Documentation 
var lake_springfield = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to go to Lake Springfield. Conner signed yes. I took Conner to Lake Springfield. "
  + "I walked around with Conner. I held Conner's hand when he went over rocks. I supervised Conner during the community outing because he is a flight risk. I guided Conner back to the car.";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the lake springfield text

  increase_counter("https://api.countapi.xyz/hit/lakespringfield/9bf3a972-acfc-47f1-aa9c-252b5ec4a2b1"); // Increase the counter for number assisted trips to lake this month
}

//Add "go to Bass Pro" to Service Documentation 
var bass_pro_museum = function() {
  var documentation_text = document.getElementById("documentation_id"); // gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to go to Bass Pro Shops Museum. Conner signed yes. I took Conner to Bass Pro Shops Museum. "
  + "I walked around with Conner while he looked at the fish and displays. I supervised Conner during the community outing because he is a flight risk. I guided Conner back to the car.";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the lake springfield text

  increase_counter("https://api.countapi.xyz/hit/basspro/9e83797f-6142-45c6-957f-698c5c351d06"); // Increase the counter for number assisted trips to bass pro museum this month
}

//Add "go to Pet Store" to Service Documentation 
var pet_store = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to go to the pet store. Conner signed yes. I took Conner to the pet store. "
  + "I walked around with Conner. I supervised Conner while he watched the fish and other pets because he is a flight risk. I guided Conner back to the car.";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the lake springfield text

  increase_counter("https://api.countapi.xyz/hit/petstore/3ef80eda-312c-4c3e-8779-44b4955bd7b2"); // Increase the counter for number assisted trip to pet store this month
}

//Add "play a puzzle" to Service Documentation 
var puzzle = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to work on a puzzle. Conner signed yes. I got out a puzzle and helped Conner find pieces. "
  + "Whenever I found a piece, I gave it to Conner and pointed to where he needed to put it.";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the lake springfield text

  increase_counter("https://api.countapi.xyz/hit/puzzle/5f0ba221-08a4-45de-b249-4a46ae7995f6"); // Increase the counter for number assisted help with puzzle this month
}

//Add "go to grocery store" to Service Documentation 
var grocery_store = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to go for a drive to buy groceries. Conner signed yes. I took Conner to the grocery store. "
  + "I helped Conner find items and I paid. Conner scanned everything at the self-checkout. I supervised Conner during the community outing because he is a flight risk. I guided Conner back to the car.";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the lake springfield text

  increase_counter("https://api.countapi.xyz/hit/grocerystore/8a434f92-3501-489d-9fd4-d1e9e529678f"); // Increase the counter for number assisted trips to grocery store this month
}

//Add "took conner to the nature center" to Service Documentation 
var nature_center = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to go to the Nature Center. Conner signed yes. I took Conner to the Nature Center." + 
  " I walked around with Conner. At intersections, I encouraged Conner to point in the direction he wanted to go. I supervised Conner during the community outing because he is a" + 
  " flight risk. I guided Conner back to the car.";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the nature center text

  increase_counter("https://api.countapi.xyz/hit/naturecenter/5e48f9c4-58e1-419d-bf46-cbd86d3cc1ee"); // Increase the counter for number assisted trips to nature center this month
}

//Add "generic outing" to Service Documentation 
var general_outing = function() {
  var documentation_text = document.getElementById("documentation_id");// gets the current documentation
  var destination = document.getElementById("destination").value;// gets the current user input for the destination name
  var activity_at_destination = document.getElementById("activity_at_destination").value;// gets the current user input for the destination name
  // below code adds the additional documentation to the current documentation
  documentation_text.innerHTML = documentation_text.innerHTML + "I asked Conner if he wanted to go to " + destination + ". Conner signed yes. I took Conner to " + destination+ ". " 
  + activity_at_destination + " I supervised Conner during the community outing because he is a flight risk. I guided Conner back to the car.";
  localStorage.setItem("documentation_key", documentation_text.innerHTML); // update the local storage value so it contains the lake springfield text

  increase_counter("https://api.countapi.xyz/hit/carcommunityouting/93010702-a0e4-46a5-a04a-70da6690bf60"); // Increase the counter for number assisted meals this month
}

// clears all the current documentation that is in local storage
var clear_all_text = function() {
  // remove the documentaiton_key from local storage
  localStorage.removeItem("documentation_key");
  // update the documentation_id element so the text disappears
  document.getElementById("documentation_id").innerHTML = localStorage.getItem("documentation_key"); 
}
// Source on how to use local storage: https://www.freecodecamp.org/news/how-to-store-data-in-web-browser-storage-localstorage-and-session-storage-explained/
