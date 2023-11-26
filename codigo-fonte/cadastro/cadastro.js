const sendImgBtn = document.getElementById('send-img-btn');
const inputFile = document.getElementById('input-file');
const imgTag = document.getElementById('image-content');
const actions = document.querySelectorAll('#action');
const passwordActions = document.querySelectorAll('#passwordAction');

let passwordStates = {}

actions.forEach(action => {
    const inputId = action.attributes['input-id'].nodeValue;
    const input = document.getElementById(inputId);

    if (!inputId || !input) return;

    action.addEventListener('click', () => {
        input.value = null;
    })
})

passwordActions.forEach((passwordAction) => {
    const inputId = passwordAction.attributes['input-id'].nodeValue;
    const input = document.getElementById(inputId);

    passwordAction[inputId] = false;

    passwordAction.addEventListener('click', () => {
        passwordAction[inputId] = !passwordAction[inputId];

        const type = passwordAction[inputId] ? 'text' : 'password';
        input.type = type;
    })
})
+


sendImgBtn.addEventListener('click', () => {
    inputFile.click();
})

inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (!file || !file.type.includes('image')) return;

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        imgTag.src = fileReader.result;
    }
})