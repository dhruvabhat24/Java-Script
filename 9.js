const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value of n: ', (answer) => {
    let n = Number.parseInt(answer);
    let i = 0;
    while (i < n) {
        console.log(n);
        i++;
    }
    rl.close();
});