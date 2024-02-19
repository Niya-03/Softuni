function encodeAndDecodeMessages() {
    const mainButtons = document.querySelectorAll('#main button');
    const encodeBtn = mainButtons[0];
    const decodeBtn = mainButtons[1];

    const textareas = document.getElementsByTagName('textarea');
    let toEncode = textareas[0];
    let toDecode = textareas[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let message = toEncode.value.split('');
        let newMes = '';
        for (let letter of message) {
            let current = letter.charCodeAt(0);
            current++;
            newMes += String.fromCharCode(current);
        }

        toDecode.value = newMes;
        toEncode.value = '';
    }

    function decode() {
        let message = toDecode.value.split('');
        let newMes = '';
        for (let letter of message) {
            let current = letter.charCodeAt(0);
            current--;
            newMes += String.fromCharCode(current);
        }

        toDecode.value = newMes;
        
    }
}