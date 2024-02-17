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
