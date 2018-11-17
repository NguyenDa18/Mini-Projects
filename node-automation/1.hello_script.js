const args = process.argv.slice(2);
const [name] = args;

if (name === undefined) {
    console.error('Please pass a name, e.g. 1.node hello_script Ben');
    process.exit(0);
}

console.log(`Nice to meet you ${name}`);

