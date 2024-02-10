// Constants for query selector
var studentId = document.querySelector("#myStudentId");
var customColor = document.querySelector(".custColor");
var randomColor = document.querySelector(".randColor");
var customNumber = document.querySelector("#customNumber");
var imageSelect = document.querySelector("#imageSelect");
var image = document.querySelector("#images");

// Function to change bg color from user input and add student id
function changeCustomColor() {
    var background = parseInt(customNumber.value);
    
    // Check if input is between 0 and 100
    if (background < 0 || background > 100) {
        studentId.textContent = "Student ID: " + "Invalid Input, Enter a number between 0 and 100.";
        return;
    } else if (background >= 0 && background <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (background > 20 && background <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (background > 40 && background <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (background > 60 && background <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (background > 80 && background <= 100) {
        document.body.style.backgroundColor = "yellow";
    }

    studentId.textContent = "Student ID: " + background;
}

// Function to change bg color from random no.
function changeRandomColor() {
    var randomColorValue = Math.floor(Math.random() * 100) + 1; // Generate random number between 1-100
    customNumber.value = randomColorValue; // Set the value in the input field
    
    // Call the changeCustomColor function to update the background color and student ID
    changeCustomColor();
}

// Function to generate options for select list
function addOptionsToSelectList() {
    var options = ["img1", "img2", "img3", "img4", "img5"];

    // Clear previous options
    while (imageSelect.firstChild) {
        imageSelect.removeChild(imageSelect.firstChild);
    }

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        imageSelect.appendChild(el);
    }
}

// Function to change image
function changeImage() {
    var imageValue = imageSelect.value;
    image.src = "img/" + imageValue + ".jpg"; 
}

// Event listeners for on click event of buttons and select
customColor.addEventListener("click", changeCustomColor);
randomColor.addEventListener("click", changeRandomColor);
customNumber.addEventListener("input", addOptionsToSelectList);

// Event listener for on change event of select
imageSelect.addEventListener("change", changeImage);
