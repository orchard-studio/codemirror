emmet.require('resources').setVocabulary({
	html: {
		abbreviations: {
			'egr+': 'div#head>(ul#nav>li*3>(div.subnav>p)+(div.othernav))+div#footer',
			'demo': '<div id="demo"></div>',
			'tm+': 'tm>html:5',
			'tm': '<xsl:template match="" mode="">',
			'tmatch': 'tm',
			'tn': '<xsl:template name="">',
			'tname': 'tn',
			'call': '<xsl:call-template name=""/>',
			'ap': '<xsl:apply-templates select="" mode=""/>',
			'api': '<xsl:apply-imports/>',
			'imp': '<xsl:import href=""/>',
			'inc': '<xsl:include href=""/>',
			'ch': '<xsl:choose>',
			'xsl:when': '<xsl:when test="">',
			'wh': 'xsl:when',
			'ot': '<xsl:otherwise>',
			'if': '<xsl:if test="">',
			'par': '<xsl:param name="">',
			'pare': '<xsl:param name="" select=""/>',
			'var': '<xsl:variable name="">',
			'vare': '<xsl:variable name="" select=""/>',
			'wp': '<xsl:with-param name="" select=""/>',
			'key': '<xsl:key name="" match="" use=""/>',
			'elem': '<xsl:element name="">',
			'attr': '<xsl:attribute name="">',
			'attrs': '<xsl:attribute-set name="">',
			'cp': '<xsl:copy select=""/>',
			'co': '<xsl:copy-of select=""/>',
			'val': '<xsl:value-of select=""/>',
			'each': '<xsl:for-each select="">',
			'for': 'each',
			'tex': '<xsl:text></xsl:text>',
			'com': '<xsl:comment>',
			'msg': '<xsl:message terminate="no">',
			'fall': '<xsl:fallback>',
			'num': '<xsl:number value=""/>',
			'nam': '<namespace-alias stylesheet-prefix="" result-prefix=""/>',
			'pres': '<xsl:preserve-space elements=""/>',
			'strip': '<xsl:strip-space elements=""/>',
			'proc': '<xsl:processing-instruction name="">',
			'sort': '<xsl:sort select="" order=""/>',
			'choose+': 'xsl:choose>xsl:when+xsl:otherwise'
		},
		
		snippets: {
			'dol': '\\$db->connect()\n\t\\$\\$\\$more dollaz$',
			'c': '<!-- |${child} -->',
			'djb': '{% block ${id} %}\n\t${child}|\n{% endblock %}',
			'attr': 'hello ${id} ${name}',
			'blank': ' target="_blank"',
			'erb': '<%= |${child} %>'
		},
		
		filters: 'bem,html'
	}
});