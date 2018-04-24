const fs = require('fs');
module.exports = function (){
  //pif (cmd === "pwd"){
    //process.stdout.write('\n' + __dirname);
  //   process.stdout.write('\n'+process.cwd());
  // //}
  fs.readdir('./' , 'utf8', (err, files) => {
    if(err){
      throw err
    }else{
      process.stdout.write(files.join('\n'));
      process.stdout.write("prompt > ");
    }
  })

}

