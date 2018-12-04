<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:template match="/">
<html><head><title>El Buen Paladar</title></head>
    <body>
        <xsl:for-each select="BDD/recetario/receta">
          <h3><xsl:value-of select="@nombre"/>
          - Receta de <xsl:apply-templates select="autor"/></h3>
          <p>Para: <xsl:apply-templates select="numPers"/></p>
          <xsl:for-each select="ingredientes">
          	<p><i><u>Ingredientes: </u></i></p>
          	<xsl:for-each select="elemento">
	          	<p><xsl:apply-templates select="cantidad"/> de
	          	<xsl:apply-templates select="ingrediente"/></p>
            </xsl:for-each>
          </xsl:for-each>
          <p><i><u>Elaboración: </u></i></p>
          <xsl:for-each select="elaboracion/paso">
          	<p><xsl:apply-templates/></p>
      	  </xsl:for-each>
        </xsl:for-each>
    </body>
</html>
</xsl:template>
        
</xsl:stylesheet>