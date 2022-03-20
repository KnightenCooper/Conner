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
get_data("https://api.countapi.xyz/get/weight/4edf9c29-d410-48fe-bd0d-a29d258d7f38", "#weight");


// function that sets the api value to 0 and changes the onscreen value to 0
function reset(link, id, updatedWeight) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link);
    xhr.onload = function() {
    document.querySelector(id).textContent = updatedWeight;
    }
    xhr.send();
}

// when the reset button is pressed, reset all API values back to 0 using the "reset" function above
function update_weight(updatedWeight) {
    reset(("https://api.countapi.xyz/set/weight/4edf9c29-d410-48fe-bd0d-a29d258d7f38?value=" + updatedWeight), "#weight", updatedWeight);
}

// Code used in create_documentation to increase counters by 1 when user clicks submit on a 'create documentation' box
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.countapi.xyz/hit/demokey/cb6e6439-2b71-4080-8b6c-a8a340fe162e");
    // xhr.responseType = "json";
    // xhr.send();