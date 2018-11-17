const url = require('url');
const args = process.argv.slice(2);
const [urlEntered] = args;

if (urlEntered === undefined) {
    console.error(`Please pass a URL`);
    process.exit(0);
}

const { protocol, slashes, host, query, href } = url.parse(urlEntered);

console.info(`Using protocol: ${protocol}`);
console.info(`Using slashes: ${slashes}`);
console.info(`Host: ${host}`);
console.info(`Query: ${query}`);
console.info(`HREF: ${href}`);