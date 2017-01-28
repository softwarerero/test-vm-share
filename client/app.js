import { Meteor } from 'meteor/meteor';
import React from 'react';

App({
  share: {
    myModel: 'myModel',
  },
  autorun() {
    this.myModel.title('new world');
  },
  render() {
    return (
      <h1>Hello <label b="text: this.myModel.title"/>!</h1>
    );
  }
});
