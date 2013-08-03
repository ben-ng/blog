/**
* Generates pull quote markup in all scenarios
*/
(function () {
  var pullquote = function (buffer) {
    //Find a pullquote
    return buffer.replace(/{% ?pullquote ?%}((.|\s)*?){"([\w\s\d]*?)"}((.|\s)*?){% ?endpullquote ?%}/g,'<span class="pullquote-right" data-pullquote="$3">$1$3$4</span>');
  };

  exports.index = pullquote;
  exports.show = pullquote;
}());