module.export = {
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "plugins": [],
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
    "default": {
      "outputSourceFiles": true
    },
    "systemName": "u文档",
    // "footer"                : "apathyjade",
    // "copyright"             :  "{string}",
    "includeDate": true,
    // "navType"               : "{vertical|inline}",
    "theme": "cosmo"
    // "linenums"              : true,
    // "collapseSymbols"       : true,
    // "inverseNav"            : true,
    // "outputSourceFiles"     : true ,
    // "outputSourcePath"      : true,
    // "dateFormat"            : "{string}",
    // "syntaxTheme"           : "{string}",
    // "sort"					: "{boolean|string}",
    // "search"                : true
  }
}
