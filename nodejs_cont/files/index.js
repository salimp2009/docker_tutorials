const fs = require("fs")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a filename: ', filename => {
  rl.question('Enter input for file: ', text => {
    fs.writeFile(`${filename}.txt`, `${text}`, err => {
      if (err) throw err 
      console.log('File was created:')
      rl.close()
    })
  })
}) 
