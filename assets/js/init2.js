jQuery(document).ready(function () {

	var $textarea = jQuery('textarea.code:first:visible');

	if ($textarea.length == 1) {
		$textarea.attr('id', 'code');

		
      /*var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: {name: "xml", alignCDATA: true},
        lineNumbers: true
      });*/
	  
	  
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		value: '',
		  mode: "text/html",
		  tabMode: "indent",
		  lineNumbers: true,
		  autoClearEmptyLines: true,
		  autofocus: true,
		  extraKeys: {
                "' '": function(cm) { CodeMirror.xmlHint(cm, ' '); },
                "'<'": function(cm) { CodeMirror.xmlHint(cm, '<'); },
                "Ctrl-Space": function(cm) { CodeMirror.xmlHint(cm, ''); }
            },
            autoCloseTags: true
		  
		  });
    
    
	}
	
});
    