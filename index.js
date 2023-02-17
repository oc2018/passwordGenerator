//select the elements from the HTML

const button = document.querySelector('#btn');
const input = document.querySelector('#input');
const alertMsg = document.querySelector('.alert');

//create a function to generate the password

const genPass = () => {
    let password = '';
    let characters = `ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?`;
    
    for (let i = 0; i <= 16; i++) {
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        
    };
    // return the password to the calling function
    return password;
}

// listen to the button click and generate the password
//then set the generated password as the input value 
//to make it visible on the screen.

button.addEventListener('click', () => {
    const genPassword = genPass();
    input.setAttribute('value', genPassword);
});

let alertIntl = null;

//create a function to show a custom alert
// and also to close it two seconds after it pops up.

const showAlert = () => {
    alertMsg.classList.add('copied');
     alertIntl = setInterval(() => {
        alertMsg.classList.remove('copied');
    }, 2000);
    
    input.setAttribute('value', '');
};


clearInterval(alertIntl);
alertIntl = null;

//create another function to copy the generated password 
// to the clipboard.

const copyToClipboard = async() => {
    await navigator.clipboard.writeText(input.getAttribute('value'));
    if(input.getAttribute('value') !==''){
        showAlert();
    };
};

//add an event listener to copy the password once the input is clicked.

input.addEventListener('click', copyToClipboard);