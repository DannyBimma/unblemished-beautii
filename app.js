`use strict`;

console.log(`Hello Beautii`);

////////////////////////////////////////////////////////////////////
// Exit-intent Modal Logic:
const mouseEvent = (e) => {
  // store if user-pointer leaves viewport from top: 
  const exitIntended = !e.toElement && !e.relatedTarget && e.clientY < 10;

  // remove listener & make modal visible:
  if (exitIntended) {
    document.removeEventListener("mouseout", mouseEvent);

    document.querySelector(".exit-intent-popup").classList.add("modal-visible");
  }
};

// wait 10s before viewport exit check:
// then listen for 'esc' keypress: 
setTimeout(() => {
  document.addEventListener("mouseout", mouseEvent);
  document.addEventListener("keydown", exit);
}, 10_000);

// close modal on mask click, button click, or 'esc' keypress:
const exit = (e) => {
  const shouldExit =
    [...e.target.classList].includes("exit-intent-popup") ||
    e.target.className === "close" ||
    e.keyCode === 27;

  if (shouldExit) {
    document
      .querySelector(".exit-intent-popup")
      .classList.remove("modal-visible");
  }

};

document.querySelector(".exit-intent-popup").addEventListener("click", exit);