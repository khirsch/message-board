import Ember from 'ember';

export default Ember.Component.extend({
  changeTheme: Ember.inject.service(),
  answerCount: Ember.computed('question.answers', function () {
    var answers = this.get('question.answers');
    return answers.get('length');
  }),
  actions: {
    saveAnswer(answer) {
      this.sendAction('saveAnswer', answer);
    },
    edit(question, params) {
      this.sendAction('edit', question, params);
    }
  }
});
