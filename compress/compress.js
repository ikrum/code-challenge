(function () {
  var testStrings = [
    'aaaabbaaaababbbcccccccccccc',
    'abc',
    'aa',
    'abcdxyzzd',
  ];

  for (var i = 0; i < testStrings.length; i++) {
    console.log('input:', testStrings[i]);
    console.log('return value:', compress(testStrings[i]));
    console.log('');
  }

  function compress(str) {
    var strArr = str.split('');
    var prev = '';
    var output = '';
    var occurance = 0;
    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i] != prev) {
        if (occurance > 0) {
          output += occurance;
        }

        occurance = 1;
        output += strArr[i];
        prev = strArr[i];
      }else {
        occurance++;
      }
    }

    if (occurance > 0) {
      output += occurance;
    }

    return output;
  }
})();
