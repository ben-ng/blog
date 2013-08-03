var config = {
  port: 80
, model: {
    defaultAdapter: 'mongo'
  }
, db: {
    mongo: {
      dbname: 'blog'
    }
  }
, plugins: {
    formatters: [
      'readmore'
    , 'pullquote'
    , 'blockquote'
    ]
  }
};

module.exports = config;
