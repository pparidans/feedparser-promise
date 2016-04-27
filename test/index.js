const FeedParser = require('../index')
const fetch = require('node-fetch')

describe('example', () => {
  it('should fetch and parse a feed', () => {
    fetch('http://la-grange.net/feed').then( res => {
      FeedParser(res.body)
        .then( feed => assert(typeof(feed)) === 'Object' )
        .catch( err => console.log('Feed parsing failed!', err) )
    })
  })
})
