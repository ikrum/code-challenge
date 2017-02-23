const URL = require('./parser');
/*** Usage ***

  var url = new URL('http://ABC.com/%7Esmith/home.html');
  console.log(url.parse());
  console.log(url.getCleanUrl());
*/

(function(){
  var testUrls = [
    ['http://abc.com:80/~smith/home.html','http://ABC.com/%7Esmith/home.html'],
    ['http://abc.com/drill/down/foo.html','http://abc.com/drill/further/../down/./foo.html'],
    ['http://abc.com/foo.html?a=1&b=2', 'http://abc.com/foo.html?b=2&a=1'],
    ['http://abc.com/foo.html?a=1&b=2&a=3','http://abc.com/foo.html?a=3&a=1&b=2']
  ]

  for(var i = 0; i<testUrls.length; i++){
    console.log('uri1:', testUrls[i][0]);
    console.log('uri2:', testUrls[i][1]);
    console.log('result:', checkURIs(testUrls[i][0],testUrls[i][1]));
    console.log('');
  }

  function checkURIs(uri1, uri2){
    return new URL(uri1).getCleanUrl() === new URL(uri2).getCleanUrl();
  }
})();
