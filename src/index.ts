import ansis from 'ansis';
import { exit_gracefully } from './utils';
import htmlContent from "./main.html" with { type: "text" };

console.clear();

const server = Bun.serve({
    routes: {
        "/": new Response(htmlContent, {
            headers: { "Content-Type": 'text/html' }
        })
    }
})

console.log(`Server running at ${ansis.blue.underline(server.url)}`)
console.log(`Press q to exit...`);

await exit_gracefully(server);
