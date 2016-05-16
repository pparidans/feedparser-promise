const FeedParser = require('feedparser')

module.exports = function FeedParserPromise(stream, opts) {
  return new Promise( function(resolve, reject) {
    const feedparser = new FeedParser(opts || {})
    var items = [];
    feedparser.on('readable', function() {
      var item
      while(item = feedparser.read()) {
        items = items.concat(item)
      }
    })
    stream
      .pipe(feedparser)
      .on('end', function(){
        return resolve(items)
      })
      .on('error', function(err){
        return reject(err)
      })
  })
}
