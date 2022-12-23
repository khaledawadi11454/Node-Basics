//command "help",that list all the possible coammand
function help(){
  console.log(
    'function startApp() for welcome application \n'+
    'function onDataReceived() for any input for each user\n'+
    'function unknownCommand()\n'+
    'function quit() for quit\n'+
    'function hello() for saying hello\n'+
    "function hello (data)"+
    "function remove(data)"+
    "function check"+
    'Starting application'
    )
}
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */


console.log(list);
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text==='exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello(text);
  }
  else if(text.split(" ")[0] === 'hello'){
    hello(text);
  } 
  else if (text ==="list\n"){
    list();
  }
  else if (text ==="add\n" || text.split(" ")[0] === 'add'){
    add(text);
  }
  else if(text ==="remove\n" ){
    liste.pop();

  }
  else if ( text.split(" ")[0] === 'remove'){
    remove(text);
  }
  else if ( text.split(" ")[0] === 'edit'){
    edit(text);
  }
  else if (text === 'edit\n'){
    console.log('Error');
  }
  else if(text.startsWith("check")){
    check(text);
  }
  else if(text==='check\n'){
    console.log("error");
  }
  else{
    unknownCommand(text);
  }
}

let liste=["[ ]khaled","[ ]awad"];

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
//list function 
function list(){
 
  for(let i=0;i<=liste.length-1;i++){
    
    console.log(liste[i]);
  } 
}

// add
function add(data) {

  data = data.replace('\n', '').trim();
  let allWords = data.split(' ');

  if (allWords[0] =='add') {
    let v = allWords.slice(1).join(' ');

  // if (!data) {
  //   console.error("Error: No data provided");
  //   return;
  
  liste.push(`[ ]${v}`);
  console.log(liste[2]);
  
}}
//remove

function remove(data) {
  data = data.replace('\n', '').trim();
  let allWords = data.split(' ');

  if (allWords[0] =='remove') {
    let v = allWords.slice(1).join(' ');
    liste.splice(v-1,1);
}
}
//Edit function
function edit(data){
  data = data.replace('\n', '').trim()
  const arry = data.split(' ');
  if (arry[0] === 'edit') {
  const secondword = arry.slice(1,2).join(' ');
  let pars = parseInt(secondword);


  if(arry.length>2){
    const thirdword = arry.slice(2).join(' ');
    if( isNaN(secondword)== false && secondword<=liste.length){
    liste[pars-1]=thirdword;
    }
    else{console.log("Error does not exist!");
  }
  }
  else if (arry.length=2){

  liste.splice(liste.length-1);


  liste.push(secondword);
  

  }}
else{
  console.log("error")
}
}
//function check
function check(data){
  data = data.replace('check ','' ).trim()
  index=data.split(" ")[0]-1;
  liste[index]=liste[index].replace(" ","✓")


}
/**
 * Says hello
 *
 * @returns {void}
 */
function hello(data){
  console.log('hello!\n')
}
function hello(data){
  data = data.replace('\n', '').trim();
  let allWords = data.split(' ');

  if (allWords[0] === 'hello') {
    let v = allWords.slice(1).join(' ');
    console.log("Hello" + v + "!");
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}



// The following line starts the application
startApp("khaled awad")

