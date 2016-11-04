import Ember from 'ember';

export default Ember.Service.extend({
  actions: {
    change() {
      Ember.$('body').toggleClass('bg-color-change');
    }
  }
});
