function validatePassword(password) {
    if (password.length < 5) {
        console.log("Password must contain at least 8 characters");
    }
    var containsUppercase = /[A-Z]/.test(password);
    var containsLowercase = /[a-z]/.test(password);
    var containsNumbers = /[0-9]/.test(password);
    var containsSpecialChar = /[~!@#$%&*^><(){},.]/.test(password);
    if (!containsUppercase) {
        return ("Password must contain uppercase character");
    }
    else if (!containsLowercase) {
        return ("Password must contain lowercase character");
    }
    else if (!containsNumbers) {
        return ("Password must contain number");
    }
    else if (!containsSpecialChar) {
        return ("Password must contain special character");
    }
    else {
        return ("The password is strong");
    }
}
var password1 = "DuAZe1@";
var password2 = "DuaA123";
var password3 = "Dua@!";
console.log(validatePassword(password1));
console.log(validatePassword(password2));
console.log(validatePassword(password3));
