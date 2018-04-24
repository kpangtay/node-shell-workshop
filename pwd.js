module.exports = function (){
  //pif (cmd === "pwd"){
    //process.stdout.write('\n' + __dirname);
    process.stdout.write('\n'+process.cwd());
  //}
  process.stdout.write('\nprompt > ');
}
