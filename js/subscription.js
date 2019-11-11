$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#mc-embedded-subscribe-form').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "no email, no message"
                }

            },
            submitHandler: function(form) {
                    success: function() {
                        $('#mc-embedded-subscribe-form :input').attr('disabled', 'disabled');
                        $('#mc-embedded-subscribe-form').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#successSubscription').fadeIn();

                        })
                    },
                    error: function() {
                        $('#mc-embedded-subscribe-form').fadeTo( "slow", 1, function() {
                            $('#errorSubscription').fadeIn();

                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})