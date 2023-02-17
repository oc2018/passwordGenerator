# HTML Password Generator
This code is used to select elements from an HTML page and generate a random password. It also includes functions to show a custom alert and copy the generated password to the clipboard. 
## Introduction
This code is a simple password generator that creates a random 16 character password. It includes uppercase and lowercase letters, numbers, and special characters. When the button is clicked, the generated password will be displayed in the input field. The user can then click on the input field to copy the generated password to their clipboard. 

## Generator Function
The `genPass()` function is used to generate the password, which is then set as the input value so it can be visible on the screen. The `showAlert()` function is used to show a custom alert and close it two seconds after it pops up. The `copyToClipboard()` function is used to copy the generated password to the clipboard when the input is clicked. 

```javascript
let characters = `ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?`;
    
    for (let i = 0; i <= 16; i++) {
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        
    };
```


## Usage
To use this code, simply click on the button to generate a random 16 character password. The generated password will be displayed in the input field and can be copied to your clipboard by clicking on it. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 
