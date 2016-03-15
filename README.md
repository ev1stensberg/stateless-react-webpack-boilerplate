# Stateless-react-webpack-boilerplate

Kickstart your development with this basic boilerplate containing a specificed webpack with css-loader, jsx-transformer, babel, react and stateless functions. 

Made with :heart: by [Even Stensberg](https://twitter.com/ev1stensberg) :tiger:
##Motivation

It is really hard to start off with react, and this boilerplate aims to get you started with few prerequisites while you are still making advanced craft. Before you start diving into your project, I recommend NOT using a boilerplate. A boilerplate should be used if you are lazy to write dependencies yourself or if you want to get a catch of how future JavaScript is written. Also, this is not entirely a boilerplate, but for you to watch stateless functions in action.

##Features

- [**Babel**](https://github.com/babel/babel) This project uses babel to load your jsx files with ES6 and transpile them into ES5. This makes the code viable for all browsers, though you can do some code yourself to make this not-so-compatible. Note that css module loaders are implemented, so you can use them just through a "require(./main.css) invoke. 

- [**React**](https://github.com/facebook/react) This project uses React for you to make client-side coding. This framework works similar to Angular's "Shadow DOM" and creates a fast & safe enviourment for you app to be run in.

- [**Webpack**](https://github.com/webpack) This project uses module loading and code splitting, making your code fast and more performance-friendly. It uses code-splitting to require modules whenever you need it in your code. 

- [**Redux**](https://github.com/reactjs/redux) This project does NOT use Redux, but this is recommended once you are more experienced, as it serves react as the bread and butter to make your code simple, but yet expressive. 

- [**ES6**](https://github.com/lukehoban/es6features) This project uses ES6 module loading through import statements rather than require, which is also modern JavaScript. It also uses Stateless functions as components to make your App even faster!


##Quickstart

1. Clone this repo using `git clone https://github.com/ev1stensberg/stateless-react-webpack-boilerplate.git`.

2. Delete the existing git repository by running `rm -rf .git`. , delete the license, readme and/or navigate to the `react-webpack-boilerplate` folder in the project.

3. Run `npm install` to install the dependencies.

4. Run `npm build` to build the script files. or, run `webpack` in the terminal, if you don't get any new scripts in `/public/`

5. Run `npm start` to start the project, and you should see some really awesome stuff in the terminal.

6. Go to `http://localhost:8080/webpack-dev-server/` and you should see the app running if you navigate to `/public/index.html` while at the dashboard in your browser, otherwise, click on index.html in your folder and open it manually. 

7. You're set to explore the future on your own! :facepunch:


##Stateless functions 

Stateless functions are a cleaner and more efficient way of using react components if you have no behaviour of your component, such as the `ComponentWillMount()`. it lets you make component super-easy with ES6 arrow functions, while having very much the same behaviour, besides gotchas like not accessing this.props, but rather invoking the properites straight away. It also let's you define your PropTypes within your arrow function, which I find very handy. To read more about ES6 & stateless functions: 

- [**Facebook DOCS**](https://facebook.github.io/react/docs/reusable-components.html)
- [**Should I use React.createClass, ES6 classes or stateless functions as components?**](http://jamesknelson.com/should-i-use-react-createclass-es6-classes-or-stateless-functional-components/)
- [**Egghead.io video**](https://egghead.io/lessons/react-building-a-react-js-app-utilizing-stateless-function-components)

##A Special Thanks To

I'd like to thank [Dan Abramov](https://twitter.com/dan_abramov), [Jordan Walke](https://twitter.com/jordwalke), [Sebastian Markbåge](https://twitter.com/sebmarkbage), [Max Stoiber](https://twitter.com/mxstbr) and [Christopher Chedeau](https://twitter.com/Vjeux) for helping me out on issues that I find very confusing at times, while still being humble. I appreciate it.

##Contribution
To contribute to this repo, please be humble, and submit specific, detailed issues, where you clearly point out the error.
