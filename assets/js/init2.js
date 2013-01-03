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



      CodeMirror.xmlHints['<'] = [
          'levelTop',
          'levelRoot',
          'mainLevel'
      ];

      CodeMirror.xmlHints['<levelTop '] = 
      CodeMirror.xmlHints['<levelRoot '] = 
      CodeMirror.xmlHints['<mainLevel '] = [
          'property1111',
          'property2222'
      ];

      CodeMirror.xmlHints['<levelTop><'] = 
      CodeMirror.xmlHints['<levelRoot><'] = 
      CodeMirror.xmlHints['<mainLevel><'] = [
          'second',
          'two'
      ];

      CodeMirror.xmlHints['<levelTop><second '] = [
        'secondProperty'
      ];

      CodeMirror.xmlHints['<levelTop><second><'] = [
        'three',
        'x-three'
      ];

      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            value: '',
            mode: 'text/html',
            lineNumbers: true,
            extraKeys: {
                "' '": function(cm) { CodeMirror.xmlHint(cm, ' '); },
                "'<'": function(cm) { CodeMirror.xmlHint(cm, '<'); },
                "Ctrl-Space": function(cm) { CodeMirror.xmlHint(cm, ''); }
            },
            autoCloseTags: true
        });
    