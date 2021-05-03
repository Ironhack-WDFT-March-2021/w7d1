###  Create webpack.config.js

```js
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'public', 'js', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development'
};
```

```bash 
$ npm install webpack webpack-cli @babel/core @babel/preset-react babel-loader --save-dev -E
```

###  Create index.html
```html
<body>
    <div id="root"></div>
    <script src='./dist/bundle.js'></script> 
</body>
```

### Add module to webpack.config.js
```js
    // 
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-react']
                        }
                    }
                ]
            }
        ]
    }
```

```bash
$ npm install react react-dom
```

### Add the code to the main.js

```bash
$ npm run build
```