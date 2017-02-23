module.exports = function (url) {
  this.relativePath = function (thePath) {
    var arr = [];
    var parts = thePath.split('/');

    for (var i = 0; i < parts.length; i++) {
      if (parts[i] == '.')
        continue;
      if (parts[i] == '..')
        arr.pop();
      else
        arr.push(parts[i]);
    }

    return arr.join('/');
  };

  this.parse = function () {
    var pattern = /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/;
    var match = decodeURIComponent(url).toLowerCase().match(pattern);

    return match && {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4] || '',
        pathname: this.relativePath(match[5]),
        search: sortQueryParams(match[6]),
        hash: match[7],
      };
  };

  this.getCleanUrl = function () {
    var urlObj = this.parse();
    var newUrl = urlObj.protocol + '//' + urlObj.hostname;
    if (urlObj.port != '80' && urlObj.port != '')
      newUrl += ':' + urlObj.port;

    newUrl += urlObj.pathname;
    if (urlObj.search)
      newUrl += '/' + urlObj.search;
    if (urlObj.hash)
      newUrl += '/' + urlObj.hash;

    return newUrl;
  };

  function sortQueryParams(query) {
    if (!query || query == '') return '';
    return '?' + query.substr(1).split('&').sort().join('&');
  }
};
