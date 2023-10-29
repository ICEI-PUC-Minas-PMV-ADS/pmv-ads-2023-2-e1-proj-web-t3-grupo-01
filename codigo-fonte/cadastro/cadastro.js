const sendImgBtn = document.getElementById('send-img-btn');
const inputFile = document.getElementById('input-file');
const imgTag = document.getElementById('image-content');


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