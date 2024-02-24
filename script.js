const texts = ["Web developer", "Mobile developer", "ML Engineer"]; // Array of texts to type

let currentText = 0;
let textElem = document.querySelector('.typewriter'); // Selecting element with class 'typewriter'

function writeText() {
  let textArr = texts[currentText].split('');
  let index = 0;

  function writeChar() {
    textElem.textContent += textArr[index];
    index++;

    if (index === textArr.length) {
      // Wait for 1 second before clearing and typing next text
      setTimeout(() => {
        textElem.textContent = "";
        currentText = (currentText + 1) % texts.length;
        writeText();
      }, 1000);
      return;
    }

    setTimeout(writeChar, 50);
  }

  writeChar();
}
writeText();

document.addEventListener("DOMContentLoaded", function() {

  // Get the button
  var mybutton = document.getElementsByClassName("scroll-top")[0];

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
});