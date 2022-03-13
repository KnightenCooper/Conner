// Use Counter API Documentation: https://countapi.xyz/#format

// function that gets the current count from API and displays it in HTML
function get_data (link, id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link);
    xhr.responseType = "json";
    xhr.onload = function() {
        document.querySelector(id).textContent = this.response.value;
    }
    xhr.send();
}
 //  get the count for each activity that conner can do in a month by calling the 'get_data' function that is above
get_data("https://api.countapi.xyz/get/boardgame/8493461e-1bd0-4a5c-9b9b-8d6817248684", "#board_game");
get_data("https://api.countapi.xyz/get/meal/c4496462-07fa-411f-ad14-784d369d9c44", "#meal");
get_data("https://api.countapi.xyz/get/walk/d5093da7-e42f-4fbe-8211-d05b2417ca83", "#walk");
get_data("https://api.countapi.xyz/get/shower/00dfe849-fb32-41d2-b742-5f79d28eeb25", "#shower");
get_data("https://api.countapi.xyz/get/park/a83d4632-7147-4fe6-bba0-b35f3899661d", "#park");
get_data("https://api.countapi.xyz/get/lakespringfield/9bf3a972-acfc-47f1-aa9c-252b5ec4a2b1", "#lake_springfield");
get_data("https://api.countapi.xyz/get/basspro/9e83797f-6142-45c6-957f-698c5c351d06", "#bass_pro");
get_data("https://api.countapi.xyz/get/petstore/3ef80eda-312c-4c3e-8779-44b4955bd7b2", "#pet_store");
get_data("https://api.countapi.xyz/get/puzzle/5f0ba221-08a4-45de-b249-4a46ae7995f6", "#puzzle");
get_data("https://api.countapi.xyz/get/grocerystore/8a434f92-3501-489d-9fd4-d1e9e529678f", "#grocery_store");
get_data("https://api.countapi.xyz/get/naturecenter/5e48f9c4-58e1-419d-bf46-cbd86d3cc1ee", "#nature_center");
get_data("https://api.countapi.xyz/get/carcommunityouting/93010702-a0e4-46a5-a04a-70da6690bf60", "#car_community_outing");



// function that resets the api value to 0 and changes the onscreen value to 0
function reset(link, id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link);
    xhr.onload = function() {
    document.querySelector(id).textContent = 0;
    }
    xhr.send();
}

// when the reset button is pressed, reset all API values back to 0 using the "reset" function above
function reset_counter() {
    reset("https://api.countapi.xyz/set/boardgame/8493461e-1bd0-4a5c-9b9b-8d6817248684?value=0", "#board_game");
    reset("https://api.countapi.xyz/set/meal/c4496462-07fa-411f-ad14-784d369d9c44?value=0", "#meal");
    reset("https://api.countapi.xyz/set/walk/d5093da7-e42f-4fbe-8211-d05b2417ca83?value=0", "#walk");
    reset("https://api.countapi.xyz/set/shower/00dfe849-fb32-41d2-b742-5f79d28eeb25?value=0", "#shower");
    reset("https://api.countapi.xyz/set/park/a83d4632-7147-4fe6-bba0-b35f3899661d?value=0", "#park");
    reset("https://api.countapi.xyz/set/lakespringfield/9bf3a972-acfc-47f1-aa9c-252b5ec4a2b1?value=0", "#lake_springfield");
    reset("https://api.countapi.xyz/set/basspro/9e83797f-6142-45c6-957f-698c5c351d06?value=0", "#bass_pro");
    reset("https://api.countapi.xyz/set/petstore/3ef80eda-312c-4c3e-8779-44b4955bd7b2?value=0", "#pet_store");
    reset("https://api.countapi.xyz/set/puzzle/5f0ba221-08a4-45de-b249-4a46ae7995f6?value=0", "#puzzle");
    reset("https://api.countapi.xyz/set/grocerystore/8a434f92-3501-489d-9fd4-d1e9e529678f?value=0", "#grocery_store");
    reset("https://api.countapi.xyz/set/naturecenter/5e48f9c4-58e1-419d-bf46-cbd86d3cc1ee?value=0", "#nature_center");
    reset("https://api.countapi.xyz/set/carcommunityouting/93010702-a0e4-46a5-a04a-70da6690bf60?value=0", "#car_community_outing");
}

// Code used in create_documentation to increase counters by 1 when user clicks submit on a 'create documentation' box
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.countapi.xyz/hit/demokey/cb6e6439-2b71-4080-8b6c-a8a340fe162e");
    // xhr.responseType = "json";
    // xhr.send();