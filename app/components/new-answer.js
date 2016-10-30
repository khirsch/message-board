import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        questions: this.get('question')
      };
      this.set('author', '');
      this.set('content', '');
      this.sendAction('saveAnswer', params);
    }
  }
});
