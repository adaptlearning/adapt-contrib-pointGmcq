define(function(require) {
    var Mcq = require('components/adapt-contrib-mcq/js/adapt-contrib-mcq');
    var Adapt = require('coreJS/adapt');
    
    var PointGmcq = Mcq.extend({

        events: function() {
            var events = {
                'focus .point-gmcq-item input':'onItemFocus',
                'blur .point-gmcq-item input':'onItemBlur',
                'change .point-gmcq-item input':'onItemSelected',
                "click .point-gmcq-widget .button.submit": "onSubmitClicked",
                "click .point-gmcq-widget .button.reset": "onResetClicked",
                "click .point-gmcq-widget .button.model": "onModelAnswerClicked",
                "click .point-gmcq-widget .button.user": "onUserAnswerClicked"
            }
            if ($('html').hasClass('ie8')) {
                var ie8Events = {
                    'click label img':'forceChangeEvent'
                }
                events = _.extend(events, ie8Events);
            }
            return events;
            
        },

        canReset: function() {
            return !this.$('.point-gmcq-widget, .button.reset').hasClass('disabled');
        },

        resetItems: function() {
            this.$('.point-gmcq-item label').removeClass('selected');
            this.$('input').prop('checked', false);
            this.deselectAllItems();
            this.setAllItemsEnabled(true);
        },

        onCannotSubmit: function() {
            this.showValidationError();
        },

        showValidationError: function() {
            this.$(".point-gmcq-item > label").addClass("point-gmcq-validation-error");
        },

        clearValidationError: function() {
            this.$(".point-gmcq-item > label").removeClass("point-gmcq-validation-error");
        },

        onItemSelected: function(event) {
            var selectedItemObject = this.model.get('items')[$(event.currentTarget).parent('.point-gmcq-item').index('.point-gmcq-item')];
            
            if(this.model.get('_isEnabled') && !this.model.get('_isSubmitted')){
                this.toggleItemSelected(selectedItemObject, event);
            }
            this.clearValidationError();
        },

        preRender: function() {
            Mcq.prototype.preRender.apply(this);

            this.listenTo(Adapt, 'device:changed', this.resizeImage);
        },

        postRender: function() {
            Mcq.prototype.postRender.apply(this);
            
            this.resizeImage(Adapt.device.screenSize);
        },
                
        resizeImage: function(width) {
            this.$('label').each(function( index ) {
                var src = $(this).find('img').attr('data-' + width);
                $(this).find('img').attr('src', src);
            });       

            this.$('label').imageready(_.bind(function() {
                this.setReadyStatus();
            }, this));
        },
        forceChangeEvent: function(event) {
            $("#" + $(event.currentTarget).closest("label").attr("for")).change();
        }
    });
    
    Adapt.register("point-gmcq", PointGmcq);

    return PointGmcq;
    
});