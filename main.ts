import {Server} from "https://deno.land/std/http/server.ts";

// const TARGET = "https://api.openai.com";
const handler = async (request: Request) => {
    // const url = new URL(request.url);
    // const targetUrl = new URL(TARGET + url.pathname + url.search);
    console.log(request)

    return await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
};

const server = new Server({handler});
console.log("server listening on http://localhost:80");

await server.listenAndServe();
