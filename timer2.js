const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


process.stdout.write("Input the timer time in seconds or 'b' to hear the beep:  ");
stdin.on('data', (key) => {
  console.log(key);
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else {
    setTimeout(()=> {
      process.stdout.write('\x07');
      process.exit();
    }, key * 1000);
  }

  

});