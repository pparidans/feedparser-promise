const FeedParserPromise = require('../index')
const fs = require('fs')

const testFeed = __dirname + '/feed.xml'

describe('FeedParserPromise', function() {

  it('should read a valid feed from filesystem and parse it', function() {
    const fsFeed = fs.createReadStream(testFeed)
    FeedParserPromise(fsFeed)
      .then( function(feed) { assert(typeof(feed)) === 'Object' } )
      .catch( function(err) { new Error('Feed parsing failed!', err) } )
  })

})
