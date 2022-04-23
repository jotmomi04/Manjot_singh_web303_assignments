    let form = document.getElementById('myform'); // get  form
    let password = document.getElementById('pwd'); // get password input
    let submit = document.getElementById('submit'); // get submit button
    let username = document.getElementById('username'); //get username
    let cpassword = document.getElementById('confirmPwd'); // get password input
    let term = document.getElementById('term'); // get term checkbox input



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

    function message() {
        var msg = document.getElementById('msg')
        const success = document.getElementById('success')
        const error = document.getElementById('error')
        if (username.value === '' || password.value === '' || term.checked == false || cpassword == '' || list.value == 'choose') {
            error.style.display = 'block';
        } else {
            setTimeout(() => {
                username.value = '';
                password.value = '';
                cpassword.value = '';
                list.value = 'choose';
                term.checked == false;


            }, 2000);
            success.style.display = "block";
            error.style.display = "none";
        }
    }


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
        if (list.select == false) {
            setError(list, "please select a country")
        } else {
            setSuccess(list);
        }
        console.log(list.select)
    }