document.querySelector("#submit-name").addEventListener("click", personalize);

function personalize(event) {
  let myTask = document.querySelector("#name");
  let taskInput = String(myTask.value);
  let isInvalid = false;

  for (let aChar of taskInput) {
    if (!/[a-zA-Z]/g.test(aChar)) {
      isInvalid = true;
      break;
    }
  }
  if (isInvalid) {
    event.target.style.background = "red";
    event.target.style.color = "black";
  } else {
    let personalizedSection = document.querySelector(".personalized");
    let p1 = `Welcome, ${taskInput}`;
    personalizedSection.children[0].remove();
    personalizedSection.children[1].remove();
    document.querySelector("#name").remove();
    personalizedSection.insertAdjacentHTML("beforeend", p1);
  }
}
