# fah-5-capstone

A small Express app for saving command strings and running them on the machine that hosts the server. The page heading is "Run system commands on the server". Saved commands are stored in a Supabase table named `commands`. The browser loads a single page, lists those rows, and can add, update, delete, or execute a row.

## Prerequisites

- Node.js and npm
- A Supabase project with a `commands` table
- A `.env` file in the project root

`server/server.js` and `server/controller.js` load `.env` with dotenv. The process reads these variables:

- `SERVER_PORT`: port passed to `app.listen`
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key

The server inserts `id` (a UUID from the `uuid` package) and `command` (the string from the client). It selects every column, updates `command` for a matching `id`, and deletes a row by `id`. `.env` is listed in `.gitignore`.

## Install, run, and test

Install dependencies from `package-lock.json`:

```bash
npm install
```

Start the server. `package.json` sets `"main"` to `server/server.js`:

```bash
node server/server.js
```

When the process is up it logs `Express() up on` followed by `SERVER_PORT`. Open `/` on that port.

`package.json` also defines:

```bash
npm start
```

That script runs `node server.js`. This repository has no `server.js` at the root, so that command exits with `MODULE_NOT_FOUND`.

There is no build script. The server loads the JavaScript files in place.

The test script is:

```bash
npm test
```

It prints `Error: no test specified` and exits with status 1. There is no other test command in this repo.

## Usage

The browser page is `server/public/index.html`, served by `GET /`. The script `server/public/main.js` is served by `GET /main`. The page loads axios and the UnoCSS runtime in the browser, then builds the list UI in `main.js`.

On load, the page requests `GET /commands` and renders one list item per row. Each item shows the stored `command` string and these controls:

- **Add**: reads the "Add a command" input and sends `POST /commands` with JSON `{ "command": "<text>" }`. The input is cleared and the list is reloaded.
- **Delete**: sends `DELETE /commands/<id>`, then reloads the list.
- **Update**: reads that row's "Edit command..." input and sends `PUT /commands/<id>` with JSON `{ "command": "<text>" }`, then reloads the list.
- **Execute**: sends `POST /spawn` with JSON `{ "command": "<stored command>" }`.

`POST /spawn` passes that string to `child_process.spawn` as the executable name. It does not pass an argument list and it does not set `shell`. When the child writes to stdout, the handler appends that chunk and sends it as the HTTP response. The page appends the response body to the output area. Stderr is logged by the server process and is not written to the response. If the child writes no stdout, the handler does not send a response.

Other routes:

| Method | Path | Behavior |
| --- | --- | --- |
| `GET` | `/` | Sends `server/public/index.html` |
| `GET` | `/main` | Sends `server/public/main.js` |
| `GET` | `/commands` | Selects all rows from `commands` and sends the rows |
| `POST` | `/commands` | Inserts `{ id, command }` and sends the insert result |
| `PUT` | `/commands/:id` | Updates `command` where `id` matches the path |
| `DELETE` | `/commands/:id` | Deletes the row whose `id` matches the path |
| `POST` | `/spawn` | Spawns the `command` string from the JSON body |

`vercel.json` points every path at `server/server.js` and sets the builder to `@now/node`. This repo does not define a deploy script.

## Layout

```text
package.json          scripts, dependency list, ISC license
package-lock.json     locked dependency tree
vercel.json           route and builder config
server/server.js      Express app and routes
server/controller.js  Supabase calls and process spawn
server/public/index.html
server/public/main.js
```

## License

`package.json` sets `"license"` to `ISC`. This repo does not include a `LICENSE` file.
