let fs = require("fs")

const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');



let quotes = readFileLines("quotes.txt")

let numOfQuotes = quotes.length

console.log(quotes[Math.floor(Math.random() * numOfQuotes) - 1])
