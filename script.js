// Timeout
//  Stampiamo dopo 1,5,10 secondi la data corrente in questo formato
//  "Ora : Minuti"

//  3 timeout diversi
(function () {
  const showTime = () => {
    console.log(new Date().getHours() + ":" + new Date().getMinutes());
  };
  setTimeout(showTime, 1000);
  setTimeout(showTime, 5000);
  setTimeout(showTime, 10000);
})();

//bonus:
(function () {
  const showTime2 = () => {
    console.log(new Date().getHours() + ":" + new Date().getMinutes());
  };
  array = [1, 5, 10];
  array.forEach((element, index, array) => {
    setTimeout(() => showTime2(), 1000 * element);
  });
})();

// Interval
// 1) Fare il console.log analogo a quello mostrato su time.is

(function () {
  const showTime = () => {
    console.clear();
    console.log(new Date().getHours() + ":" + new Date().getMinutes());

    document.body.innerHTML = `
    <h1>${new Date().getHours() + ":" + new Date().getMinutes()}</h1>
  `;
  };
  //setInterval(showTime, 1000); commentato per evitare il console.clear del resto
})();

//dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo,
//come se fosse un tombola, un numero.
//Cancelliamo l'interval quando avremo pescato tutti i numeri possibili.
//tip: Contiamo quante volte abbiamo fatto parte l'intervallo


let timesRun = 0;
let extractRandomNumbers = setInterval(function () {
  timesRun += 1;
  if (timesRun === 6) {
    clearInterval(extractRandomNumbers);
  }
  const array2 = [42, 23, 1, 7, 12, 99];
  const random = Math.floor(Math.random() * array2.length);
  console.log(array2[random]);
}, 1000);
