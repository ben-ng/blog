/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var parse_url = require('./parse_url')
  , MONGO_PARSED = parse_url(process.env.MONGOLAB_URI)
  , config = {
      detailedErrors: false
    , hostname: "0.0.0.0"
    , port: process.env.PORT
    , model: {
        defaultAdapter: 'mongo'
      }
    , db: {
        mongo: {
          username: MONGO_PARSED.user
        , dbname: MONGO_PARSED.path.substring(1)    // Get rid of the leading `/`
        , password: MONGO_PARSED.pass
        , host: MONGO_PARSED.host
        , port: parseInt(MONGO_PARSED.port)
        }
      }
    , sessions: {
        store: 'cookie'
      , key: 'did'
      , expiry: 14 * 24 * 60 * 60
      }
    };

module.exports = config;


