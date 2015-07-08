ColorTextviewfieldText.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('ColorTextviewfieldText.ReadyState')
  // someOtherState: SC.State.plugin('ColorTextviewfieldText.SomeOtherState')

});
