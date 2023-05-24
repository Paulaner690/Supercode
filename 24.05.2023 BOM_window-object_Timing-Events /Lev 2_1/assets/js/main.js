const countOutput = document.querySelector("#count");
let count = 10;

const countdown = () => {
  let startInterval = setInterval(() => {
    count--;

    if (count === -1) {
      clearInterval(startInterval);
      count = 10;
    }
    countOutput.innerHTML = `${count}`;
  }, 1000);
};
countdown();
