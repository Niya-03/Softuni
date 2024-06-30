function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const submitBtn = document.getElementById('submit').addEventListener('click', sendData);
    const refreshBtn = document.getElementById('refresh').addEventListener('click', loadData);
    const messages = document.getElementById('messages');

    async function sendData(event){
       // event.preventDefault(); 

        const data = document.querySelectorAll('input');
        let [authorRef, contentRef] = data;
        let authorName = authorRef.value;
        let contentText = contentRef.value;

        let postData = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorName,
                content: contentText
            })
        }

        await fetch(url, postData);
        authorRef.value = '';
        contentRef.value = '';
    }

    async function loadData(e){
        messages.value = '';
        let response = await fetch(url);
        let data = await response.json();

        Object.values(data).forEach(rec =>  messages.value+= `${rec.author}: ${rec.content}\n`);
        messages.value = messages.value.trim();
    }
}

attachEvents();