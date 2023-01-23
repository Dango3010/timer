const arr = process.argv; //['lfdsf', 'dfd', '10', '3', '5', '15', '9']
arr.splice(0, 2); //arr = ['10', '3', '5', '15', '9']
const time = arr.sort(function(a, b){return a-b}); //[ '3', '5', '9', '10', '15' ]

for (item of time) {
  let time2 = Number(item)*1000; // 3000, 5000, 9000, 10000, 15000
  if (!time2) {
    break;
  }
  if (time2 >= 0 && typeof(time2) === 'number') {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time2)
  }
};
// This will make it beep at: 3 seconds, 5 seconds, 9 seconds, 10 seconds, 15 seconds

