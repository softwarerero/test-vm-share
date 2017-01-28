import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import React from 'react';
import { render } from 'react-dom';
import ViewModel from 'viewmodel-react';
import { App } from './app.js';

// Use Meteor's dependency management
ViewModel.Tracker = Tracker;

//why can't i define App here?

Meteor.startup(() => {
  render(<App/>, document.getElementById('app'));
});
