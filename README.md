# Chrome new tab Extension

Yet another tab chrome extension.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

The story behind this project is pretty simple;

> I want to see my main goal as often as possible using a big, stressful deadline countdown.

I don't want to deal with user privacy, thus, everything will be stored in the user's browser.

## Available Scripts

```sh
npm run build # Compile the app for the production
npm run start # Launch dev server locally
```

## How is linked the React application and the Chrome extension?

The king piece is the [`manifest.json`](./public/manifest.json).

### Upload the app to your chrome based browser (locally - dev)

First, build your app using `npm run build`.
Then, visit `chrome://extensions/` on your chrome browser and enable the developer mode.
To finish, click on **Load unpacked** and select your `build` folder.

Your extension is now loaded and listed on the extension page 🎉.

Happy hacking!

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is [open source](./LICENSE).