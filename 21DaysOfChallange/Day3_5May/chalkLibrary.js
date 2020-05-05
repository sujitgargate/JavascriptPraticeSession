const chalk=require('chalk');

const greenMsg= chalk.green('Log in Sucessful');

const redMsg=chalk.red('Log in failed , Enter correct password')

const yellowMsg=chalk.yellow('User Not Found , Please register')

const orangeMsg=chalk.red.bgYellow('DataBase Data Fetched with Warnings')

console.log(greenMsg);
console.log(redMsg);
console.log(yellowMsg);
console.log(orangeMsg)