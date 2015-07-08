ColorTextviewfieldText.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    ColorTextviewfieldText.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    ColorTextviewfieldText.getPath('mainPage.mainPane').remove();
  }

});

