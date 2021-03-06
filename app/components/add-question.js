import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newQuestionForm() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        postDate: moment().valueOf()
      };
      this.set('author', '');
      this.set('content', '');
      this.set('notes', '');
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
