import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(answer) {
      this.sendAction('saveAnswer', answer);
    },
    edit(question, params) {
      this.sendAction('edit', question, params);
    }
  }
});
