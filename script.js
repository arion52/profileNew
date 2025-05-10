const texts = ["Web developer", "App developer", "ML Engineer", "DL Researcher"]; 

let currentText = 0;
let textElem = document.querySelector(".typewriter");

function writeText() {
  let textArr = texts[currentText].split("");
  let index = 0;

  function writeChar() {
    textElem.textContent += textArr[index];
    index++;

    if (index === textArr.length) {
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

document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('menu-expanded');
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all timeline content elements
  const timelineItems = document.querySelectorAll('.tlcontent');
  
  // Add event listeners for hover effects
  timelineItems.forEach(item => {
    // Mouse enter - Change border color to blue
    item.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 5px 15px rgba(94, 137, 255, 0.36)'; // Blue border
      this.style.transition = 'box-shadow 0.5s ease'; // Smooth transition
    });
    
    // Mouse leave - Return to original state
    item.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)'; // Original shadow
    });
  });
});