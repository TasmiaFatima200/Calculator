$(document).ready(function() {
        $(".design").click(function() {
            if (!$(this).hasClass("not")) {
                if ($("#expression").val() == 0) {
                    $("#expression").val($(this).text());
                } else {
                    $("#expression").val($("#expression").val() + $(this).text());
                }
            }
        });

        $("#allClear").click(function() {
            $("#expression, #result").val("0");
        });

       
        $("#equals").click(function() {
            var result;
            
            try {
                result = (eval(($("#expression").val())));
                $('#errors-div').hide();
                $('#results-div').html(result).fadeIn('slow');
                $("#expression").val("0");
            } catch (e) {
                if (e instanceof SyntaxError || e instanceof TypeError) {
                    $('#errors-div').html('Error! Calculating values. Make sure to only perform one calculation at a time').fadeIn('slow');
                    $("#expression").val("0");
                    $("#results-div").hide();
                }
            }
        });   
    }); 