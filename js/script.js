
var typed = new Typed('#typed', {
    strings: ['Desktop Application Developer', 'Web Application Developer', 'CS Undergrad', 'Freelancer'],
    backSpeed: 50,
    typeSpeed: 50,
    smartBackspace: true,
    loop: true
});


// Form Validation
function FormValidation() {

    let uname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (uname == "") {
        document.getElementById("nameMsg").innerHTML = "*";
        return false;
    }
    if (email == "") {
        document.getElementById("emailMsg").innerHTML = "*";
        return false;
    }
    if (message == "") {
        document.getElementById("messageMsg").innerHTML = "*";
        return false;
    }
}
