const Validation = (formData) => {
    let errors = {};

    if (!formData.username) {
        errors.username = "Wpisz nazwe wariacie"
    }
    else if (formData.username.length < 5) {
        errors.username = "Username musi mieć przynajmniej 5 znaków"
        // throw new Error(errors.message || 'dupsko');
    }

    if (!formData.password) {
        errors.password = "pole jest wymagane"
    }
    else if (formData.password.length < 8) {
        errors.password = "za krótkie hasło"
    }
    else if (formData.password.toLowerCase() === formData.password) {
        errors.password = "hasło musi zwierać conajmniej 1 wielka litere"
    }
    else if (isNaN(formData.password)) {
        errors.password = "Niepoprawne dane"
    }

    if (formData.password !== formData.rep_password) {
        errors.rep_password = "Hasła nie są zgodne"
    }

    return errors;

}

export default Validation;

