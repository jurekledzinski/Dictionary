# ![WebApp](https://github.com/jurekledzinski/Dictionary/blob/media/images/Simple%20Dictionary.jpg?raw=true)

# Simple Dictionary

Small application where you can choose the word in given language and see its meaning, pronunciation (only english), definitions.
Application is made as progressive web application "PWA".

When application is offline:

- Can see previously searched words in online mode
- Can listen audio pronunciation (only english)
- Save 100 words available offline

### Technologies

Build with:

- [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React router](https://reactrouter.com/) - Collection of navigational components.
- [Webpack](https://webpack.js.org/) - Bundle your assets,scripts,images...
- [Workbox](http://getbootstrap.com/) - Set of libraries that can power a production-ready service worker for your Progressive Web App.

### Installation

Application requires [React.js](https://reactjs.org/) v16+ and [Webpack](https://webpack.js.org/) v5 to run.

```sh
clone respository or download files
change .env.example to .env
npm install in root folder
```

### Run application

```sh
npm run serve - run locally build version
```

Service workers are adjusted to work only on production to avoid caching in development phase, npm run serve will create build folder and run it.

#### See live

[Simple Dictionary](https://optimistic-albattani-dbb329.netlify.app/)

## License

MIT © [Jurek Ledziński](https://github.com/jurekledzinski)
