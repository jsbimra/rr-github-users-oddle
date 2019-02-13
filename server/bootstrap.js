// process.env.BABEL_ENV = 'development';
// process.env.NODE_ENV = 'development';
//for mac users 

require('ignore-styles');

require('babel-register')({
    ignore: [/(node_modules)/],
    presets: ['es2015', 'react-app']
});

require('./index');
