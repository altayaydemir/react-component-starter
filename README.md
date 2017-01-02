# React Component Starter

<p align="center">
  <img src="https://s10.postimg.org/wtlotfkmx/Desktop_HD.png" />
  <b>Starter project for crafting React Components.</b>
</p>

## Features

* [CSS modules](https://github.com/css-modules/) configuration with SCSS syntax
* ESlint configuration with [Airbnb's React Styleguide](https://github.com/airbnb/javascript/tree/master/react)
* Testing setup powered by [Jest](https://github.com/facebook/jest) & [Enzyme](https://github.com/airbnb/enzyme/)
* Example project configuration which builds into `docs` folder as a static webpage so you can serve it from Github repository

## Installation

```bash
$ git clone git@github.com:altayaydemir/react-component-starter.git

$ cd react-component-starter

### Yarn
# Install yarn package manager
$ npm install yarn -g 

# Install project dependencies
$ yarn

```

## Usage

### Development Flow

```bash
# run this while developing your component
$ yarn run start

# run documentation project (separately from first one)
$ yarn run start:docs

# run both tasks concurrently
$ yarn run dev
```

### Production Build

```bash
# build the library
$ yarn run build:lib

# build the docs
$ yarn run build:docs

# build'em all!
$ yarn run build
```

### Testing

```bash
# run tests in watch mode
$ yarn run test:watch

# run tests and generate code coverage
$ yarn run test
```
