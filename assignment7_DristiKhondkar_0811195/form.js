
$(document).ready(function () {
    $("#MyPayment").validate({
        rules: {
            credit: {
                required: true,
                pattern: /^\d{4}-\d{4}-\d{4}-\d{4}$/
            },

            cvv : {
                required:true,
                pattern: /^\d{1}-\d{1}-\d{1}$/
            }

        },

        messages: {
           
            credit: {
                required: "Please enter a valid number",
                pattern: "Please enter a valid number card (e.g., 1234-5678-7890)"
            },
            cvv: {
                required:"Please enter a CVV",
                pattern: "Please enter a valid CVV number (e.g. 345) "
            }
        }
    });
});
