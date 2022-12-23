//command "help",that list all the possible coammand
function help(){
  console.log(
    'function startApp() for welcome application \n'+
    'function onDataReceived() for any input for each user\n'+
    'function unknownCommand()\n'+
    'function quit() for quit\n'+
    'function hello() for saying hello\n'+
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
  else{
    unknownCommand(text);
  }
}


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
    console.log("Hello " + v + "!");
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

