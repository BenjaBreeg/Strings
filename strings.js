// Benja Guzzetta

// The function that checks if the string entered by the user is a palindrome or not.
function isPalindrome(str) {
    // This removes spaces from text and converts it to lowercase for an accurate comparison.
    var cleanedStr = str.replace(/\s+/g, '').toLowerCase(); 
    // This reverses the 'cleaned' string.
    var reversedStr = cleanedStr.split('').reverse().join(''); 
    // This part checks if the 'cleaned' string is equal to its reversed version, aka a palindrome.
    return cleanedStr === reversedStr; 
}

// The function to check if the string entered is palindrome when user clicks the button.
function checkPalindrome() {
    // This gets the user input from the text field.
    var userInput = document.getElementById('userInput').value;

    // This part checks if the input is empty.
    if (userInput.trim() === '') {
        alert('Please enter a possible palindrome...'); // This line is to alert the user to enter a string.
        return;
    }

    // This part checks if the user's string is a palindrome or not.
    if (isPalindrome(userInput)) {
        // Displays the results + an encouranging message afterward if it IS a palindrome.
        document.getElementById('result').innerHTML += `<p>'${userInput}' is a palindrome! Woot!!</p>`;
    } else {
        // Displays the results + an encouraging message afterward if it IS NOT a palindrome.
        document.getElementById('result').innerHTML += `<p>'${userInput}' is not a palindrome, but feel free to try again!!</p>`;
    }

    // This clears the input field after checking, so the user can enter another string.
    document.getElementById('userInput').value = '';
}
// Good-lookin' function right there! Lol.