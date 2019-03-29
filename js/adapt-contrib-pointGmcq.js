define([
  'core/js/adapt',
  'components/adapt-contrib-mcq/js/adapt-contrib-mcq'
], function(Adapt, Mcq) {

  var PointGmcq = Mcq.extend({

    events: {
      'focus .point-gmcq-item input': 'onItemFocus',
      'blur .point-gmcq-item input': 'onItemBlur',
      'change .point-gmcq-item input': 'onItemSelected',
      'keyup .point-gmcq-item input':'onKeyPress'
    },

    onQuestionRendered: function() {
      this.$('img').imageready(function() {
        this.setReadyStatus();
      }.bind(this));
    },

    canReset: function() {
      return !this.$('.point-gmcq-widget, .button.reset').hasClass('disabled');
    },

    resetItems: function() {
      Mcq.prototype.resetItems.apply(this);
      this.$('.point-gmcq-item label').removeClass('selected');
    },

    onCannotSubmit: function() {
      this.showValidationError();
    },

    showValidationError: function() {
      this.$('.point-gmcq-item > label').addClass('point-gmcq-validation-error');
    },

    clearValidationError: function() {
      this.$('.point-gmcq-item > label').removeClass('point-gmcq-validation-error');
    },

    onItemSelected: function(event) {
      var selectedItemObject = this.model.get('_items')[$(event.currentTarget).parent('.point-gmcq-item').index('.point-gmcq-item')];

      if (this.model.get('_isEnabled') && !this.model.get('_isSubmitted')) {
        this.toggleItemSelected(selectedItemObject, event);
      }
      this.clearValidationError();
    }

  }, {
    template: "point-gmcq"
  });

  return Adapt.register("point-gmcq", PointGmcq);

});
