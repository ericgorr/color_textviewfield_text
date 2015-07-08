// ==========================================================================
// Project:   ColorTextviewfieldText
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals ColorTextviewfieldText */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
ColorTextviewfieldText.main = function main() {
  var statechart = ColorTextviewfieldText.statechart;

  SC.RootResponder.responder.set('defaultResponder', statechart);
  statechart.initStatechart();
};


function main() { ColorTextviewfieldText.main(); }
