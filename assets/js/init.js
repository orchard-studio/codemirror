jQuery(document).ready(function () {

	var $textarea = jQuery('textarea.code:first:visible');

	if ($textarea.length == 1) {
		$textarea.attr('id', 'code');
		
		var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
			value: '',
			mode: "text/html",
			tabMode: "indent",
			lineNumbers: true,
			autoClearEmptyLines: true,
			autofocus: true,
			profile: 'xhtml',
			autoCloseTags: true
			  
		});
			 
		var hlLine = editor.addLineClass(0, "background", "activeline");
			editor.on("cursorActivity", function() {
				editor.matchHighlight("CodeMirror-matchhighlight");
				var cur = editor.getLineHandle(editor.getCursor().line);
				if (cur != hlLine) {
				editor.removeLineClass(hlLine, "background", "activeline");
				hlLine = editor.addLineClass(cur, "background", "activeline");
			}
		});    
	}
	
	
	
});
jQuery(document).keypress("s",function(e) {
		if(e.ctrlKey && e.shiftKey){
			//jQuery("#contents form ").submit();
			jQuery("#contents form :submit:first").click();
		}
});
