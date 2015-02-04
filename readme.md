# Zygo Example App
A simple markdown-based "blogging platform" to show off the [zygo](https://github.com/zygo-io/zygo) rendering framework.

## Installation
```sh
git clone git@github.com:zygo-io/zygo-example.git
cd zygo-example
npm install -g jspm zygo-cli
npm install
jspm install
```

## Running
To run in development mode (no bundling), `zygo --serve`.
To switch into prod mode and run, `zygo --setmode prod; zygo --serve`.

Then open up `http://localhost:8080` in the browser. (^_^)
