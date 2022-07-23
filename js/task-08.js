const formRef = document.querySelector('.login-form')
console.log(formRef);

const onVerificatForm = (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    else {
        const user = {
            email: email.value,
            password: password.value,
        };
        console.log(user);
    }
    formRef.reset();
}

formRef.addEventListener('submit', onVerificatForm)