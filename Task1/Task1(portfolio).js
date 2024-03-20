function dark() {
    event.preventDefault();
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.querySelector('.card1').classList.remove('dark-mode'); 
        document.querySelector('.n').style.backgroundColor="black";
        document.querySelector('#inp').style.backgroundColor="white";
        document.querySelector('#inp').style.borderColor="black";
        document.querySelector('#sub').style.backgroundColor="white";
        document.querySelector('#sub').style.borderColor="black";
        document.querySelector('#msg').style.backgroundColor="white";
        document.querySelector('#msg').style.borderColor="black";
        document.querySelector('#inpu').style.backgroundColor="white";
        document.querySelector('#inpu').style.borderColor="black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector('.card1').classList.add('dark-mode');
        document.querySelector('.n').style.backgroundColor="gray";
        document.querySelector('#inp').style.backgroundColor="black";
        document.querySelector('#inp').style.borderColor="white";
        document.querySelector('#sub').style.backgroundColor="black";
        document.querySelector('#sub').style.borderColor="white";
        document.querySelector('#msg').style.backgroundColor="black";
        document.querySelector('#msg').style.borderColor="white";
        document.querySelector('#inpu').style.backgroundColor="black";
        document.querySelector('#inpu').style.borderColor="white";
    }
}


var texts = ["Akif","Web Designer", "Programmer"]; // Array of texts to cycle through
var currentIndex = 0; // Index to keep track of the current text

function changeText() {
    var textElement = document.getElementById("changingText"); // Assuming you have an element with id "changeableText"
    textElement.innerHTML = texts[currentIndex]; // Set the text to the current index
    currentIndex = (currentIndex + 1) % texts.length; // Increment index and loop back to 0 if it exceeds the array length
}

document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to navigation links
    document.querySelectorAll('.navigation').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Call the dark() function on click event, and changeText() function every 5 seconds
    var intervalId = setInterval(changeText, 2000); // Change text every 2 seconds (2000 milliseconds)
    document.getElementById("changingText").addEventListener("click", dark); // Change text on clicking it
});
