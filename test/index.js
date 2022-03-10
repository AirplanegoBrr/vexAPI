const { token } = require('./config.json');
const vex = require('../vexAPI.js');

vex.init(token);

vex.events().then(console.log);