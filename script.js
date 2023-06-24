document.getElementById('generate').addEventListener('click', function() {
    var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialCharacters = '!@#$%^&*()';
    var length = 10;
    var password = '';

    // Expected to ensure one character of each type in the password
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    // Fill up the remaining characters in the password
    for (var i = password.length; i < length; i++) {
        var characters = lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    // Shuffle password to ensure random position of character types
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

    document.getElementById('password').innerText = password;
});
