// Making mobile navigation functional
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function showProject1() {
  project1 = document.querySelectorAll(".project1");
  project2 = document.querySelectorAll(".project2");
  project3 = document.querySelectorAll(".project3");
  project4 = document.querySelectorAll(".project4");
  project5 = document.querySelectorAll(".project5");
  pages = document.querySelectorAll(".page");
  for (let details of project1) {
    details.style.display = "block";
  }
  for (let details of project2) {
    details.style.display = "none";
  }
  for (let details of project3) {
    details.style.display = "none";
  }
  for (let details of project4) {
    details.style.display = "none";
  }
  for (let details of project5) {
    details.style.display = "none";
  }
  for (let page of pages) {
    page.style.display = "none";
  }
}

function showProject2() {
  project1 = document.querySelectorAll(".project1");
  project2 = document.querySelectorAll(".project2");
  project3 = document.querySelectorAll(".project3");
  project4 = document.querySelectorAll(".project4");
  project5 = document.querySelectorAll(".project5");
  pages = document.querySelectorAll(".page");
  for (let details of project1) {
    details.style.display = "none";
  }
  for (let details of project2) {
    details.style.display = "block";
  }
  for (let details of project3) {
    details.style.display = "none";
  }
  for (let details of project4) {
    details.style.display = "none";
  }
  for (let details of project5) {
    details.style.display = "none";
  }
  for (let page of pages) {
    page.style.display = "none";
  }
}

function showProject3() {
  project1 = document.querySelectorAll(".project1");
  project2 = document.querySelectorAll(".project2");
  project3 = document.querySelectorAll(".project3");
  project4 = document.querySelectorAll(".project4");
  project5 = document.querySelectorAll(".project5");
  pages = document.querySelectorAll(".page");
  for (let details of project1) {
    details.style.display = "none";
  }
  for (let details of project2) {
    details.style.display = "none";
  }
  for (let details of project3) {
    details.style.display = "block";
  }
  for (let details of project4) {
    details.style.display = "none";
  }
  for (let details of project5) {
    details.style.display = "none";
  }
  for (let page of pages) {
    page.style.display = "none";
  }
}

function showProject4() {
  project1 = document.querySelectorAll(".project1");
  project2 = document.querySelectorAll(".project2");
  project3 = document.querySelectorAll(".project3");
  project4 = document.querySelectorAll(".project4");
  project5 = document.querySelectorAll(".project5");
  pages = document.querySelectorAll(".page");
  for (let details of project1) {
    details.style.display = "none";
  }
  for (let details of project2) {
    details.style.display = "none";
  }
  for (let details of project3) {
    details.style.display = "none";
  }
  for (let details of project4) {
    details.style.display = "block";
  }
  for (let details of project5) {
    details.style.display = "none";
  }
  for (let page of pages) {
    page.style.display = "none";
  }
}

function showProject5() {
  project1 = document.querySelectorAll(".project1");
  project2 = document.querySelectorAll(".project2");
  project3 = document.querySelectorAll(".project3");
  project4 = document.querySelectorAll(".project4");
  project5 = document.querySelectorAll(".project5");
  pages = document.querySelectorAll(".page");
  for (let details of project1) {
    details.style.display = "none";
  }
  for (let details of project2) {
    details.style.display = "none";
  }
  for (let details of project3) {
    details.style.display = "none";
  }
  for (let details of project4) {
    details.style.display = "none";
  }
  for (let details of project5) {
    details.style.display = "block";
  }
  for (let page of pages) {
    page.style.display = "none";
  }
}

function goToSection() {
  project1 = document.querySelectorAll(".project1");
  project2 = document.querySelectorAll(".project2");
  project3 = document.querySelectorAll(".project3");
  project4 = document.querySelectorAll(".project4");
  project5 = document.querySelectorAll(".project5");
  pages = document.querySelectorAll(".page");
  for (let details of project1) {
    details.style.display = "none";
  }
  for (let details of project2) {
    details.style.display = "none";
  }
  for (let details of project3) {
    details.style.display = "none";
  }
  for (let details of project4) {
    details.style.display = "none";
  }
  for (let details of project5) {
    details.style.display = "none";
  }
  for (let page of pages) {
    page.style.display = "block";
  }
}

// Making show more button in photography section functional
function showMore() {
  let moreImages = document.getElementById("moreimg");
  let btnText = document.getElementById("showmore");

  if (btnText.innerHTML.includes("more")) {
    console.log("yes");
    moreImages.style.display = "grid";
    btnText.innerHTML = "show less";
    btnText.classList.remove("moreBtn");
    btnText.classList.add("moreBtn2");
  } else {
    moreImages.style.display = "none";
    btnText.innerHTML = "show more";
    btnText.classList.remove("moreBtn2");
    btnText.classList.add("moreBtn");
  }
}

// Making arrow button back to top functional
//Get the button
let mybutton = document.getElementById("backButton");

// When the user scrolls down 550px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    window.innerWidth > 1200 &&
    (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550)
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Contact Form in PHP
const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#023047";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf("required") != -1 ||
        response.indexOf("valid") != -1 ||
        response.indexOf("failed") != -1
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
