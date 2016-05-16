const FeedParserPromise = require('../index')
const fs = require('fs')
const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

describe('FeedParserPromise', function() {

  it('should read a valid feed from filesystem and parse it', function() {
    const feedStream = fs.createReadStream(__dirname + '/feed.xml')
    return expect(FeedParserPromise(feedStream)).to.eventually.be.an('array')
  })

  it('an invalid feed should throw a "catchable"  error', function() {
    const brokenFeedStream = fs.createReadStream(__dirname + '/notafeed.xml')
    return expect(FeedParserPromise(brokenFeedStream)).to.be.rejected
  })

})
