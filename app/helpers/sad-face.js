import Ember from 'ember';

export function sadFace(params) {
  var question = params[0];
  if (question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<img class="sad-face" src="/assets/images/sad-white.png">');
  }
}

export default Ember.Helper.helper(sadFace);
