process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = [];
    for (let i = 0; i < b; i++) {
        let line = '';
        for( let j = 0; j < a; j++) {
            line += '*';
        }
        result.push(line);
    }
    console.log(result.join('\n'));
});