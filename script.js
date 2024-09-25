const texts = ["Web developer", "Mobile developer", "ML Engineer"]; // Array of texts to type

let currentText = 0;
let textElem = document.querySelector(".typewriter"); // Selecting element with class 'typewriter'

function writeText() {
  let textArr = texts[currentText].split("");
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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling back to the top
  });
}

// function showAbout() {
//   document.getElementById("landing-page").style.display = "none";
//   document.getElementById("projects").style.display = "none";
//   document.getElementById("timeline").style.display = "none";
//   document.getElementById("about").style.display = "block";
// }

// function showProjects() {
//   document.getElementById("landing-page").style.display = "none";
//   document.getElementById("about").style.display = "none";
//   document.getElementById("timeline").style.display = "none";
//   document.getElementById("projects").style.display = "block";
// }

// function showTimeline() {
//   document.getElementById("landing-page").style.display = "none";
//   document.getElementById("about").style.display = "none";
//   document.getElementById("projects").style.display = "none";
//   document.getElementById("timeline").style.display = "block";
// }

// function showLandingPage() {
//   document.getElementById("about").style.display = "none";
//   document.getElementById("projects").style.display = "none";
//   document.getElementById("timeline").style.display = "none";
//   document.getElementById("landing-page").style.display = "block";
// }

function showSection(sectionId) {
  const sections = ["landing-page", "timeline", "projects", "about"];
  sections.forEach(section => {
    const el = document.getElementById(section);
    el.style.display = (section === sectionId) ? "block" : "none";
    if (section === sectionId) {
      el.classList.add("fade-in");
    } else {
      el.classList.remove("fade-in");
    }
  });
}
