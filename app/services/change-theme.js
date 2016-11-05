import Ember from 'ember';

export default Ember.Service.extend({
  changeBackground() {
    Ember.$('body').toggleClass('bg-color-change');
  }
});
