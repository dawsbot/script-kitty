var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.setShowPrintMargin(false);

var myTextarea = document.getElementById('editor');
// fill textarea from hash on page load
function removeHash(hash) {
  return hash.replace(/^\#/, '');
}
var hash = removeHash(window.location.hash);

editor.setValue(hash);

// hash input
editor.on('input', function(e) {
  var val = editor.getValue();
  window.location.hash = val;
  eval(val);
});
