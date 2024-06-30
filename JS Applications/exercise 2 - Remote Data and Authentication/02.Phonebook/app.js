function attachEvents() {
    const btnLoad = document.getElementById('btnLoad').addEventListener('click', loadData);
    const btnCreate = document.getElementById('btnCreate').addEventListener('click', createData);
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const phonebook = document.getElementById('phonebook')

    async function loadData(e) {
        phonebook.innerHTML = '';

        let res = await fetch(url);
        let data = await res.json();
debugger;
        Object.values(data).forEach(x => makeLi(x.person, x.phone, x._id));
        
    }

    async function createData(e) {
        let personName = document.getElementById('person');
        let personPhone = document.getElementById('phone');

        let name = personName.value;
        let phone = personPhone.value;

        let postData = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "person": name,
                "phone": phone
            })

        }

        await fetch(url, postData);

        personName.value = '';
        personPhone.value = '';
        loadData();
    }

    function makeLi(person, phone, id) {
        let li = document.createElement('li');
    
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', async deleteData => {
            let deleteReq = {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            }
    
            await fetch(`${url}/${id}`, deleteReq);
        });

        li.textContent = `${person}: ${phone}`;
        li.appendChild(deleteBtn);
        phonebook.appendChild(li);
    }


}

attachEvents();