const button = document.querySelector('#btn');
const input = document.querySelector('#input');
console.log(input.getAttribute('value'))

const genPass = () => {
    let password = '';
    let characters = `ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?`
    
    for (let i = 0; i <= 16; i++) {
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        
    }
    
    return password;
}

button.addEventListener('click', () => {
    const genPassword = genPass();
    input.setAttribute('value', genPassword)
})

const copyToClipboard = async() => {
    await navigator.clipboard.writeText(input.getAttribute('value'));
    alert(`Copied to Clipboard`);
}

input.addEventListener('click', copyToClipboard)