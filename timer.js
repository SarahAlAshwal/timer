const arg = process.argv;
let timeArray = arg.slice(2);

timeArray.sort;

for (const time of timeArray) {
  if (Number(time) > 0) {
    setTimeout(()=> {
      process.stdout.write('\x07');
    }, time * 1000);
  }
   
  

}

