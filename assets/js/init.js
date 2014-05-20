jQuery(document).ready(function () {

	var $textarea = jQuery('textarea.code:first:visible');
	var $width = $textarea.innerWidth();

	if ($textarea.length == 1) {
		$textarea.attr('id', 'code');
		$textarea.attr('width',$width);
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
		
		editor.setSize($width);

		$(window).resize(function(){
			var $width = $textarea.innerWidth();
			editor.setSize($width);

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