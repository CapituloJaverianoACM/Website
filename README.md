# Website
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). To see a [guide ](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) with some information on how to perform common tasks.

This project is the Frontend of ACM chapter webpage, is develop with [React.js](https://reactjs.org/), to see the Backend develop in [Django](https://www.djangoproject.com/), visit the [WebSiteAPI repository](https://github.com/CapituloJaverianoACM/WebSiteAPI)

## Table of contents

- [Contributors](#contributors)
- [Prerequisites](#prerequisites)
	- [Node (npm)](#node-npm)
- [Installation](#installation)
	- [Clone the repository](#clone-the-repository)
	- [Install the requirements](#install-the-requirements)
- [Running the ReactApp](#running-the-reactapp)
- [Gulp tasks](#gulp-tasks)
- [Licence](#licence)

## Contributors
| Name                       | GitHub                                | Rol                |
| -------------------------- | ------------------------------------- | ------------------ |
| Juan Manuel Sánchez Lozano | [juanmsl](https://github.com/juanmsl) | Frontend developer |

## Prerequisites

We recommend work on Linux or on a Unix system, because it's easier to install packages and frameworks; but, if you want to work on Windows you can do it.

### Node (npm)

You must have `node.js` on your computer, you can download it from their [Webpage](https://nodejs.org/en/download/package-manager/), or just run the following command if you are in a Debian and Ubuntu based Linux distribution.

```shell
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

When you have installed `node.js` you can check your version

```shell
$ node --version
v8.9.4

$ npm --version
5.6.0
```

When you have installed `node.js` with `npm`, install `gulp` (and i recommend to install `yarn` too)

```shell
$ sudo npm install -g gulp
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn
```

After install the packages, check them in your system
```shell
$ gulp --version
CLI version 3.9.1

$ yarn --version
1.3.2
```

> If you have any problem installing the packages, visit the [Node webpage](https://nodejs.org/en/download/package-manager/), or [Yarn webpage](https://yarnpkg.com/en/docs/install).

## Installation
### Clone the repository

```shell
$ git clone https://github.com/CapituloJaverianoACM/Website.git
$ cd Website
```

### Install the requirements

Install node packages described in the `package.json`

```shell
$ yarn --prod=false
```

## Running the ReactApp

```shell
$ npm start
```

> After starting your local server you can test the ReactApp on [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

## Gulp tasks

This tasks are described in the `gulpfile.babel.js` file, and can help you to work with the project

To run `gulp` just run the following command, it start the `default` gulp task.

```shell
$ gulp
```

Furthermore there are another tasks that you can execute with the command below

```shell
$ gulp <taskname>
```

| Taskname          | Description                                            |
| ----------------- | ------------------------------------------------------ |
| build:styles      | Build `styles.css` file from the `.scss` files         |
| build:fonts       | Copy all fonts in `dev` folder to the `static` folder  |
| generate:todolist | Generate the todolist and the fixmelist of the project |
| clean             | Clean the project of all the generated files           |
| build             | Execute all `build:` tasks                             |
| clean:build       | Clean the project and after that build it              |

## Licence
This project is licensed under the GPL-3.0 License - see the [LICENSE.md](https://github.com/CapituloJaverianoACM/Website/blob/master/LICENSE) file for details
