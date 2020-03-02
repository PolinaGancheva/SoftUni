function attachEvents() {
    const loadBtn = document.querySelector("#btnLoad");
    const createBtn = document.querySelector("#btnCreate");
    const phonebookUl = document.querySelector("#phonebook");
    const person = document.querySelector("#person");
    const phone = document.querySelector("#phone");

    loadBtn.addEventListener('click', loadContacts);

    function loadContacts() {
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .forEach(([elId, phonebookData]) => {
                        const { phone, person } = phonebookData;
                        const li = document.createElement('li');
                        li.textContent = `${person}: ${phone}`
                        const deleteBtn = document.createElement('button');
                        deleteBtn.innerHTML = 'Delete';
                        deleteBtn.setAttribute('id', elId);
                        deleteBtn.addEventListener('click', deletePerson)
                        li.appendChild(deleteBtn);
                        phonebookUl.appendChild(li);
                    });

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    function deletePerson(e) {
        const id = e.target.getAttribute('id');
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res => res.json()))
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    createBtn.addEventListener('click', createContact);
    function createContact() {
        const data = { person: person.value, phone: phone.value };

        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(() => {
                phonebookUl.innerHTML = '';
                person.value = '';
                phone.value = '';
                loadContacts();
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
}

attachEvents();