// ==========================================================================
// Project:   ColorTextviewfieldText - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals ColorTextviewfieldText */

// This page describes the main user interface for your application.
ColorTextviewfieldText.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
	mainPane: SC.MainPane.design({
    	childViews: ['textFieldView'],


		textFieldView: SC.TextFieldView.extend({
			classNames: [ 'my_red_text' ],
			isTextArea: true,
			layout: { width: 250, height: 80, centerX: 0, centerY: 0 },
			value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		})
	})

});
