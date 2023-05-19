document.querySelector("#submit-button").addEventListener("click", personalize);

document.querySelector(".about-button").addEventListener("click", toggleAbout);

document
  .querySelector(".contact-button")
  .addEventListener("click", toggleContact);

document
  .querySelector(".location-button")
  .addEventListener("click", toggleLocation);

document.querySelector(".mode-button").addEventListener("click", changeMode);

let isLocationOpen = false;
let isContactOpen = false;
let isSwitchOpen = false;

function toggleAbout() {
  openClose(".header-about", ".about-button");
}

function toggleContact() {
  if (isLocationOpen) {
    openClose(".location-area", ".location-button");
    isLocationOpen = false;
  }
  if (openClose(".contact-area", ".contact-button")) {
    isContactOpen = true;
  } else {
    isContactOpen = false;
  }
}

function toggleLocation() {
  if (isContactOpen) {
    openClose(".contact-area", ".contact-button");
    isContactOpen = false;
  }
  if (openClose(".location-area", ".location-button")) {
    isLocationOpen = true;
  } else {
    isLocationOpen = false;
  }
}

function openClose(targetArea, targetButton) {
  let aboutMenu = document.querySelector(`${targetArea}`);
  let button = document.querySelector(`${targetButton}`);
  let aboutStyle = window.getComputedStyle(aboutMenu, null);
  let displayValue = aboutStyle.getPropertyValue("display");
  let rt = document.querySelector(":root");
  if (displayValue === "none") {
    aboutMenu.style.display = "block";
    let clickedColor =
      getComputedStyle(rt).getPropertyValue("--clicked-button");
    button.style.color = clickedColor;
    return 1;
  } else {
    aboutMenu.style.display = "none";
    let originalColor = getComputedStyle(rt).getPropertyValue("--blue");
    button.style.color = originalColor;
    return 0;
  }
}

function personalize(event) {
  let myTask = document.querySelector("#personalized-name");
  let taskInput = String(myTask.value);
  let isInvalid = false;
  console.log(taskInput);

  for (let aChar of taskInput) {
    if (!/[a-zA-Z]/g.test(aChar)) {
      isInvalid = true;
      break;
    }
  }
  if (taskInput === "") {
    isInvalid = true;
  }
  if (isInvalid) {
    event.target.style.background = "red";
    event.target.style.color = "black";
  } else {
    let personalizedSection = document.querySelector(".personalized");
    let p1 = `<p> Welcome, ${taskInput} </p>`;
    personalizedSection.innerHTML = p1;
  }
}

function changeMode() {
  let rt = document.querySelector(":root");
  if (isSwitchOpen) {
    rt.style.setProperty("--blue", "#001aff");
    rt.style.setProperty("--black", "#000000");
    rt.style.setProperty("--dark-green", "#032900");
    rt.style.setProperty("--footer-gray", "rgba(79, 100, 96, 0.4)");
    rt.style.setProperty("--button-background", "rgba(97, 89, 89, 0.45)");
    rt.style.setProperty("--header-gray", "rgba(79, 85, 100, 0.35)");
    rt.style.setProperty("--nav-gray", "rgba(187, 175, 175, 0.45)");
    rt.style.setProperty("--main-gray", "#eee");
    rt.style.setProperty("--main-background", "#fff");
    isSwitchOpen = false;
  } else {
    rt.style.setProperty("--blue", "#00c2ff");
    rt.style.setProperty("--black", "#fff");
    rt.style.setProperty("--dark-green", "#10cb00");
    rt.style.setProperty("--footer-gray", "#4F6460");
    rt.style.setProperty("--button-background", "#eee");
    rt.style.setProperty("--header-gray", "#4F5564");
    rt.style.setProperty("--nav-gray", "#534646");
    rt.style.setProperty("--main-gray", "#313131");
    rt.style.setProperty("--main-background", "rgba(97, 89, 89, 0.45");
    isSwitchOpen = true;
  }
}
