import html from './main.html';
import ansis from 'ansis';
import { exit_gracefully } from './utils';

console.clear();

const server = Bun.serve({
    routes: {
        "/": html
    }
})

console.log(`Server running at ${ansis.blue.underline(server.url)}`)
console.log(`Press q to exit...`);

await exit_gracefully(server);
