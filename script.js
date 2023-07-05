document.getElementById('generate').addEventListener('click', function() {
    var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialCharacters = '!@#$%^&*()';
    var characters = '';
    var password = '';

    var length = parseInt(prompt("Choose a length for your password between 8 and 24 characters"));
    while (isNaN(length) || length < 8 || length > 24) {
        length = parseInt(prompt("Invalid input. Please enter a number between 8 and 24."));
    }

    if (confirm("Would you like to include lowercase characters?")) {
        characters += lowerCaseLetters;
    }
    if (confirm("Would you like to include uppercase characters?")) {
        characters += upperCaseLetters;
    }
    if (confirm("Would you like to include numbers?")) {
        characters += numbers;
    }
    if (confirm("Would you like to include special characters?")) {
        characters += specialCharacters;
    }

    while (characters.length === 0) {
        alert("You must select at least one character type.");
        if (confirm("Would you like to include lowercase characters?")) {
            characters += lowerCaseLetters;
        }
        if (confirm("Would you like to include uppercase characters?")) {
            characters += upperCaseLetters;
        }
        if (confirm("Would you like to include numbers?")) {
            characters += numbers;
        }
        if (confirm("Would you like to include special characters?")) {
            characters += specialCharacters;
        }
    }

    for (var i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    document.getElementById('password').innerText = password;
});
