import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      var question = params.question;
      question.get('answers').addObject(newComment);
      newComment.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },
  }
});
