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
    const time =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();

    document.body.innerHTML = `
    <h1>${time}</h1>
  `;
  };
  setInterval(showTime, 1000); 
})();

//dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo,
//come se fosse un tombola, un numero.
//Cancelliamo l'interval quando avremo pescato tutti i numeri possibili.
//tip: Contiamo quante volte abbiamo fatto parte l'intervallo

(function () {
  const array2 = [42, 23, 1, 7, 12, 99];
  const extractNumbers = () => {
    const random = Math.floor(Math.random() * array2.length);
    console.log(array2[random]);
    array2.splice(random, 1);
  };
  const endInterval = () => clearInterval(timerId);
  const timerId = setInterval(extractNumbers, 1000);
  setTimeout(endInterval, 1000 * array2.length);
})();

// let timesRun = 0;
// let extractRandomNumbers = setInterval(function () {
//   const array2 = [42, 23, 1, 7, 12, 99];
//   timesRun += 1;

//   if (timesRun === array2.length) {
//     clearInterval(extractRandomNumbers);
//   }

//   const random = Math.floor(Math.random() * array2.length);
//   array2.splice(random, 1);
//   console.log(array2[random]);
// }, 1000); ---> da risolvere
