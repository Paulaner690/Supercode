const txtOutput = document.getElementById("txt");

const startTime = () => {
  let heute = new Date();
  let std = heute.getHours();
  let min = heute.getMinutes();
  let sek = heute.getSeconds();

  txtOutput.innerHTML = `${heute}${std}${min}${sek}`;
};

setInterval(startTime, 1000);
