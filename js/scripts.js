$(document).ready(function(){
    $('#btnLogin').click(function () {
        $('#loginModal').modal('show');
    });
    $('#submitCourse').click(function () {
        alert('Thanks for the registration! You will get a mail soon!');
    });
    $("input[type='checkbox']").click(function(){

        if ($(this).is(':checked')) {
            $(this).siblings('label').html('Registered!');

        } else {
            $(this).siblings('label').html('Click to register');

        }
    });
});