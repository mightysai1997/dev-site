if (!process[Symbol.for('ts-node.register.instance')]) {
  require('source-map-support').install();
  require('ts-node').register();
}

module.exports = require('./src/gatsby/gatsby-config');
