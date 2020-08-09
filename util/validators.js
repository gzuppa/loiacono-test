module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {}
    if(username.trim() === ''){
        errors.username = "Select a cool username"
    }
    if(email.trim() === ''){
        errors.email = "Your email must not be empty"
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = "Your email is cool but not valid"
        }
    }
    if(password === ''){
        errors.password = 'Your password is important, must not be empty'
    } else if (password !== confirmPassword){
        errors.confirmPassword = 'Remember that your password must match'
    }
    return {
        errors,
        valid: Object.keys(errors).length > 1
    }
}

module.exports.validateLoginInput = (username, password) => {
    const errors = {}
    if(username.trim() === ''){
        errors.username = "Select a cool username"
    }
    if(password.trim() === ''){
        errors.password = "Check your password please"
    }
    return {
        errors,
        valid: Object.keys(errors).length > 1
    }
}