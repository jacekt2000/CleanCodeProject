const Validation = (formData) => {
    let errors = {};

    if(!formData.username) {
        errors.username = "Wpisz nazwe wariacie"
    }
     else if (formData.username.length < 5) {
        errors.username = "Użyj jednego prostego triku aby powiekszyć swój login"
        // throw new Error(errors.message || 'dupsko');
    }

    if(!formData.password) {
        errors.password = "Gorące hasła w twojej okolicy"
    }
    else if (formData.password.length < 8) {
        errors.password = "Masz za krótki temat"
    }
    else if (formData.password.toLowerCase() === formData.password) {
        errors.password = "lekarze go NIENAWIDZĄ, odkrył jeden błyskawiczny sposób na powiększenie litery w swoim haśle ZOBACZ JAK"
    }
    else if (isNaN(formData.password)) {
        errors.password = "Napisz ile masz cm w haśle"
    }

    if (formData.password !== formData.rep_password){
        errors.rep_password = "Jeden pindol był cieniutki, a drugi gruby jak świnia. Może ukąszenie świni boli, lecz to rany po leszczynie goją się dłużej."
    }

    return errors;

}

export default Validation;
// throw new Error(data.message || 'Unable to login');