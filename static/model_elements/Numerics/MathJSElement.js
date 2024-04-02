/*
 * Copyright (C) 2024 Francisco Esquembre
 * 2024 01 Implementation of JS Model Elements to WebEJS
 */

var WebEJS_MODEL_ELEMENTS = WebEJS_MODEL_ELEMENTS || {};

/**
  * HardwareAccelerometer
  * Basic functions needed by WebEJS to generate the code for this model element
 **/
 
WebEJS_MODEL_ELEMENTS["org.colos.ejss.model_elements.numerics.MathJSJavascriptElement"] = function() {
  var self = {};

  self.getGenericName = function() { return "MathJS "; } 

  self.getConstructorName = function() { return "mathJS "; } 

  self.getInitializationCode = function(name) { // Code for the LINT in JS
    return ""; 
  }

  self.getSourceCode = function(name) { 
    return "";
  }

  self.getImportStatements = function() { // Required for Lint
    return "Numerics/math-3.16.4.min.js"; 
  } 

  return self;

};

/*
  // -------------------------------
  // Implementation of ModelElement
  // -------------------------------
  
  public ImageIcon getImageIcon() { return ELEMENT_ICON; }
  
  public String getGenericName() { return "MathJS"; }
  
  public String getConstructorName() { return "MathJS"; }
  
  public String getInitializationCode(String _name) { // Code for the LINT in JS
    return "";
  }

  public String getSourceCode(String name) { // Code that goes into the body of the model 
    return "";
  }

  public String getPackageList() { 
    return "";
  } 

  public String getImportStatements() { 
    return "Numerics/math-3.16.4.min.js"; 
  }
  
}
*/