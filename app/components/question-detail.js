import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(answer) {
      this.sendAction('saveAnswer', answer);
    }
  }
});
