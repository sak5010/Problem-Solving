const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let triangle = [];
    for (let i = 0; i < Number(input[0]); i++) {
        triangle.push("*".repeat(i+1));
    }
    console.log(triangle.join('\n'));
});