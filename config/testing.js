(function () {
  var path = require('path')
  , _ = require('underscore')
  , opts = require('./development');
  
  opts = _.clone(opts);
  opts.db = {
      username: null
    , dbname: 'testing'
    , prefix: null
    , password: null
    , host: 'localhost'
    , port: 27017
  };
  
  module.exports = opts;
}());