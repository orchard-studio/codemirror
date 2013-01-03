jQuery(document).ready(function () {

	var $textarea = jQuery('textarea.code:first:visible');

	if ($textarea.length == 1) {
		$textarea.attr('id', 'code');

		
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: {name: "xml", alignCDATA: true},
        lineNumbers: true
      });
    
	}
	
});
