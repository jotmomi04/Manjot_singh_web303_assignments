    let form = document.getElementById('myform'); // get  form
    let password = document.getElementById('pwd'); // get password input
    let submit = document.getElementById('submit'); // get submit button
    let username = document.getElementById('username'); //get username
    let cpassword = document.getElementById('confirmPwd'); // get password input
    let term = document.getElementById('term'); // get term checkbox input
    let list = document.getElementById('list');


    form.addEventListener('submit', function(e) {

        e.preventDefault();
        validateInputs();
    });
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')

    }
    const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error')


    }
    var lists = countries;
    var key;
    for (key in lists) { // Loop through models
        options += `<option value="${key}">${models[key]}</option>`;
    }
    list.innerHTML = options; // Update select box
    console.log("value is ", lists)


    var validateInputs = () => {
        const usernamevalue = username.value.trim() // use trim to avoid whitespace
        const passwordvalue = password.value.trim();
        const cpasswordvalue = cpassword.value.trim();
        // const termvalue = term.Checked;
        //const termvalue = term.value();

        if (usernamevalue === '') {
            setError(username, 'Username is requierd');
        } else {
            setSuccess(username);
        }

        if (passwordvalue === '') {
            setError(password, 'password is required');

        } else if (passwordvalue.length < 12) {
            setError(password, 'Password must be 12 charcter')

        } else {
            setSuccess(password);
        }

        if (cpasswordvalue === '') {
            setError(cpassword, 'Confirm your password')
        } else if (cpasswordvalue !== passwordvalue) {
            setError(cpassword, 'password not matched')
        } else {
            setSuccess(cpassword);
        }
        console.log("Term is", term, "term is checked", term.checked)
        if (term.checked == false) {
            setError(term, 'please check the box')
        } else {
            setSuccess(term);
        }


    }