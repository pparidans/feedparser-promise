const FeedParser = require('../index')
const fetch = require('node-fetch')

describe('example', function() {
  it('should fetch and parse a feed', function() {
    fetch('http://la-grange.net/feed').then( function(res) {
      FeedParser(res.body)
        .then( function(feed) { assert(typeof(feed)) === 'Object' } )
        .catch( function(err) { console.log('Feed parsing failed!', err) } )
    })
  })
})
