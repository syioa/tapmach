export async function exit_gracefully(server: Bun.Server<undefined>) {
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);

        process.stdin.resume();
        process.stdin.setEncoding('utf8');

        process.stdin.on("data", async (key: string) => {
            if (key.toLowerCase() == 'q') {
                await server.stop();

                if (process.stdin.isTTY) {
                    process.stdin.setRawMode(false);
                    process.stdin.pause();
                }

                process.exit(0);
            }
        })
    }
}

