const server = Bun.serve({
    routes: {
        "/": new Response("Hello")
    }
})

console.log(`Server running at ${server.url}`)
