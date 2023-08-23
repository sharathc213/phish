function loadTwo() {

    let csf = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
        headers: { "X-CSRFToken": csf },
        url: "/Two",
        type: "POST",
        // dataType: "json",
        success: function(data) {

            $('.lodder').html(data);
        }
    });

}

function loadFour2() {

    let csf = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
        headers: { "X-CSRFToken": csf },
        url: "/loadFour",
        type: "POST",
        // dataType: "json",
        success: function(data) {

            $('.lodder').html(data);
        }
    });

}

function loadSix() {

    let csf = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
        headers: { "X-CSRFToken": csf },
        url: "/Six",
        type: "POST",
        // dataType: "json",
        success: function(data) {

            $('.lodder').html(data);
        }
    });

}

function loadThree() {
    var company_name = $(".company_name").val();
    var email = $(".email").val();
    var check = true
    if (company_name == "") {
        $(".company_name_error").html("Please Fill the feald");
    } else {
        $(".company_name_error").html("");
    }
    if (email == "") {
        $(".email_error").html("Please Fill the feald");
    } else {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(email)) {

            $(".email_error").html("");
        } else {
            check = false
            $(".email_error").html("Please Enter A Valid  E-mail");
        }

    }
    if (email != "" && company_name != "" && check) {

        let csf = $("input[name=csrfmiddlewaretoken]").val();
        $.ajax({
            headers: { "X-CSRFToken": csf },
            url: "/Three",
            type: "POST",
            data: { company_name: company_name, email: email },

            success: function(data) {
                $('.lodder').html(data);
            }
        });
    }
}

function loadFour() {
    var phrase_1 = $(".phrase_1").val();
    var phrase_2 = $(".phrase_2").val();
    var phrase_3 = $(".phrase_3").val();
    var phrase_4 = $(".phrase_4").val();
    var phrase_5 = $(".phrase_5").val();
    var phrase_6 = $(".phrase_6").val();
    var phrase_7 = $(".phrase_7").val();
    var phrase_8 = $(".phrase_8").val();
    var phrase_9 = $(".phrase_9").val();
    var phrase_10 = $(".phrase_10").val();
    var data = {
        phrase_1: phrase_1,
        phrase_2: phrase_2,
        phrase_3: phrase_3,
        phrase_4: phrase_4,
        phrase_5: phrase_5,
        phrase_6: phrase_6,
        phrase_7: phrase_7,
        phrase_8: phrase_8,
        phrase_9: phrase_9,
        phrase_10: phrase_10
    }

    let csf = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
        headers: { "X-CSRFToken": csf },
        url: "/Four",
        type: "POST",
        data: data,
        success: function(data) {

            $('.lodder').html(data);
        }
    });

}


// Function to display the countdown timer and store the remaining time in a session variable
function startCountdown() {
    // Get the div where you want to display the countdown
    var countdownDiv = document.getElementById('countdown');

    // Get the current remaining time from the session or set it to 30 seconds if not present
    var remainingTime = sessionStorage.getItem('remainingTime');
    if (remainingTime === null) {
        remainingTime = 10;
    } else {
        remainingTime = parseInt(remainingTime);
    }

    // Display the initial countdown value
    countdownDiv.textContent = 'Time remaining: ' + remainingTime + ' seconds';

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        remainingTime--;

        // Display the updated countdown value
        countdownDiv.textContent = 'Time remaining: ' + remainingTime + ' seconds';

        // Store the remaining time in the session
        sessionStorage.setItem('remainingTime', remainingTime);

        // Check if the countdown has reached 0
        if (remainingTime <= 0) {
            clearInterval(countdownInterval); // Stop the countdown
            countdownDiv.textContent = 'Time is up! Please full all the Phrase'; // Display a message when time is up
            var textboxes = document.querySelectorAll('input[type="text"]');
            textboxes.forEach(function(textbox) {
                textbox.value = "";
                startSecondCountdown()
                $(".alert").html("Please fill the phrase in the correct order");
            });
        }
    }, 1000);
}

window.onbeforeunload = function() {
    return "You are not allowed to navigate away from this page.";
};





// Function to display the countdown timer and store the remaining time in a session variable
function startSecondCountdown() {
    // Get the div where you want to display the countdown
    var countdownDiv = document.getElementById('countdown');

    // Get the current remaining time from the session or set it to 30 seconds if not present
    var remainingTime2 = sessionStorage.getItem('remainingTime2');
    if (remainingTime2 === null) {
        remainingTime2 = 30;
    } else {
        remainingTime2 = parseInt(remainingTime2);
    }

    // Display the initial countdown value
    countdownDiv.textContent = 'Time remaining: ' + remainingTime2 + ' seconds';

    // Update the countdown every second
    var countdownInterval2 = setInterval(function() {
        remainingTime2--;

        // Display the updated countdown value
        countdownDiv.textContent = 'Time remaining: ' + remainingTime2 + ' seconds';

        // Store the remaining time in the session
        sessionStorage.setItem('remainingTime', remainingTime2);

        // Check if the countdown has reached 0
        if (remainingTime2 <= 0) {
            clearInterval(countdownInterval2); // Stop the countdown
            loadFour()

        }
    }, 1000); // Update every 1 second (1000 milliseconds)
}

window.onbeforeunload = function() {
    return "You are not allowed to navigate away from this page.";
};




function loadFive() {
    var cemail = $(".cemail").val();
    var name = $(".name").val();
    var phno = $(".phno").val();
    var emp_id = $(".emp_id").val();
    var ph_t = true;
    var e_t = true
    var nam_t = true
    var emp_t = true
    if (name == "") {
        var nam_t = false
        $(".name_error").html("Please Fill the feald");
    } else {
        $(".name_error").html("");
    }
    if (emp_id == "") {
        var emp_t = false
        $(".emp_id_error").html("Please Fill the feald");
    } else {
        $(".emp_id_error").html("");
    }
    if (cemail == "") {
        var e_t = false
        $(".cemail_error").html("Please Fill the feald");
    } else {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(cemail)) {

            $(".cemail_error").html("");
        } else {
            var e_t = true
            $(".cemail_error").html("Please Enter A Valid  E-mail");
        }

    }

    if (phno == "") {

        var ph_t = false;
        $(".phno_error").html("Please Fill the feald");
    } else if (phno.length != 10 || isNaN(phno) == true || phno == 0) {

        var ph_t = false;
        $(".phno_error").html("Please Enter A Valid  phone Number");
    } else {
        $(".phno_error").html("");
    }
    if (ph_t &&
        e_t &&
        nam_t &&
        emp_t) {

        let csf = $("input[name=csrfmiddlewaretoken]").val();
        $.ajax({
            headers: { "X-CSRFToken": csf },
            url: "/Five",
            type: "POST",
            data: {
                cemail: cemail,
                name: name,
                phno: phno,
                emp_id: emp_id
            },

            success: function(data) {
                $('.lodder').html(data);
            }
        });
    }
}