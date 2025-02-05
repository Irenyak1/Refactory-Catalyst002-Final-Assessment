/* Ankunda Nisha Stephanie
validate function to ensure that the form is
 submitted when all the required inputs are entered*/

const validate = () => {
    // adding an event listener so that the alert message styles can be seen after an alert is read
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
    });

    //validation so that surname field isnt empty
    const namev = document.getElementById('sur');
    const alpha = /^[A-Za-z]+$/;
    if (namev.value.match(alpha) || namev == '') {
        return true;
    }
    else {
        alert('This field is required');
        namev.style.border = "2px red solid";
    }

    //validation so that given name field isn't empty
    const give = document.getElementById('giv');
    const alphabates = /^[A-Za-z]+$/;
    if (give.value.match(alphabates) || give == '') {
        return true;
    }
    else {
        alert('This field is required');
        give.style.border = "2px red solid";
    }

    //validation so that date of birth is given
    const birth = document.getElementById('date');
    if (birth.value == '') {
        alert("This field is required");
        birth.style.border = "2px red solid";
    }

    //validation so that country field isn't empty
    const city = document.getElementById('country');
    if (city.value == '----select country-----') {
        alert('Please choose a country');
        city.style.border = "2px red solid";
    }
    else {
        return true;
    }

    //validation so that place of resience field isn't empty

    const pla = document.getElementById('place');
    if (pla.value == '') {
        alert('This field is required');
        pla.style.border = "2px red solid";
    }

    //validation so that phone number field isn't empty
    const zip = document.getElementById('num');
    const code = /^[-+]?[0-9]+$/;
    if (zip.value == '' || zip.value.match(code)) {
        alert('This field is required');
        zip.style.border = "2px red solid";
    }
    //email validation
    const mail = document.getElementById('email');
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value.match(mailformat) || mail.value == ' ') {
        return true;
    }
    else {
        alert('This field is required, a valid email has "@"');
        mail.style.border = "2px red solid";
    }


}

//function to enable a user leave the page when they click exit

const leave = () => {

    if (confirm("Are you sure you want to exit?")) {
        document.write("");
    }


}