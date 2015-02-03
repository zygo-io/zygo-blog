# Zygo Example App
A simple markdown-based "blogging platform" to show off the [zygo](https://github.com/zygo-io/zygo) rendering framework.

## Installation
Ensure that you have `jspm` and `nodemon` installed before running the below steps. If you are lacking they can be installed with `npm install -g zygo-cli jspm nodemon`.

```sh
git clone git@github.com:zygo-io/zygo-example.git
cd zygo-example
npm install
jspm install
```

## Running
To run in development mode (no bundling), `zygo --serve`.
To switch into prod mode and run, `zygo --setmode prod; zygo --serve`.
