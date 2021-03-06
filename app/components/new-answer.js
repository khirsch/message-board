import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        postDate: moment().valueOf()
      };
      this.set('author', '');
      this.set('content', '');
      this.sendAction('saveAnswer', params);
    }
  }
});
