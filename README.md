### pixijs-animation-example

This is an example of Flash-authored, 2D animation gpu-rendered by PixiJS.

To get it running on a Mac via the terminal:

1. Make sure [iojs](https://iojs.org/en/index.html) is installed (for npm).
2. Install [electron](https://github.com/atom/electron/tree/master/docs) (formerly atom-shell) globally in your $PATH by running `npm install electron-prebuilt -g` in Terminal.
  * You might need to run as sudo instead: `sudo npm install electron-prebuilt -g`
3. Change directories to the project directory.
4. Run: `npm install`
5. Build by running: `gulp`
  * The included Gulp script will transpile the ES6 using Babel into the dist folder. It will also generate sourcemaps to make debugging easier (using Chrome's dev tools).
6. Press `ctrl-c` when es6 has finished to return to the shell.
7. Run electron: `electron .`
