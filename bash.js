const pwd = require('./pwd');
process.stdout.write('prompt >');
 process.stdin.on('data', (data) => {
   const cmd = data.toString().trim();
   process.stdout.write('you typed: '+ cmd);
   if (cmd === "pwd"){
    //process.stdout.write('\n' + __dirname);
    //process.stdout.write('\n'+process.cwd());
    pwd();
    }
  //  if (cmd === "pwd"){
  //    //process.stdout.write('\n' + __dirname);
  //    process.stdout.write('\n'+process.cwd());
  //  }
  //  process.stdout.write('\nprompt > ');
 });


//hi
