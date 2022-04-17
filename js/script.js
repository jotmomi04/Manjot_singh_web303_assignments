(function() {
    let form = document.getElementsById('myform');
    let password = document.getElementById('pwd');
    let confirmPassword = document.getElementById('confirmpwd');
    let submit = document.getElementById('submit');

    let submitted = false;
    submit.disabled = true;
    submit.className = 'disabled';
    console.log(submit.className);
})