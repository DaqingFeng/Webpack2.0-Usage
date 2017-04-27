# Webpack 2.4.1 Usage

When we using webpack 1.0x ,if we want to load js file . we need config loaders to support import thirdparty compoment.
 the web config like 

```javascript
    module: {
        loaders: [
            {
                loader: 'babel-loader',   
                test: [
                    path.join(__dirname, 'appconfig'),  //if we want to compile es6 other folder .we need config this.
                    path.join(__dirname, 'controller'),
                    path.join(__dirname, 'components'),
                    path.join(__dirname, 'model'),
                    path.join(__dirname, 'utils'),
                    path.join(__dirname, 'services')],
                query: {
                    presets: 'es2015',
                },
            },
            {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                loader: "imports?this=>window"
            },
            {
                // I want to uglify with mangling only app files, not thirdparty libs
                test: /build\/mainpage\/.*\.js$/,
                exclude: /Scripts/, // excluding .spec files
                loader: "uglify"
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
```



but webpack 2.0 ,if easily to realize config import thirdparty  compoment then before.

```javascript
    module: {
        rules: [{
            // JS LOADER
            // Reference: https://github.com/babel/babel-loader
            // Transpile .js files using babel-loader
            // Compiles ES6 and ES7 into ES5 code
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
    ```
Obviouslly webpack 2.0 config is easily then 1.0 .

this is webpack2.0 usage of Angularjs and jquery.


## Installation
* Install  [node](https://nodejs.org)
*  `npm install  webpack --global `

target project folder to install dependency.
*  `npm install `
*  `webpack`


## Usage

* project folder run `grunt` to start task.