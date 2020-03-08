import {get, post, put, del} from './requester.js';

const html ={
    'getAllBooks': () => document.getElementById('all-books'),
    'getBookTtle': () => document.getElementById('title'),
    'getBookAuthor': () => document.getElementById('author'),
    'getBookIsbn': () => document.getElementById('isbn'),
    'getEditTitle': () => document.getElementById('edit-title'),
    'getEditAuthor': () => document.getElementById('edit-author'),
    'getEditIsbn': () => document.getElementById('edit-isbn'),
    'getEditId': () => document.getElementById('edit-id')
}
const actions ={
    'load-books': async function(){
        try{
            const books = await get('appdata', 'books');
            const booksContainer = html.getAllBooks();
            const fragment = document.createDocumentFragment();
            books.forEach(b => {
                const tr = document.createElement('tr');
                const titleTd = document.createElement('td');
                const authorTd = document.createElement('td');
                const isbnTd = document.createElement('td');
                const actionsTd = document.createElement('td');
                const editBtn = document.createElement('button');
                const deleteBtn = document.createElement('button');

                titleTd.textContent = b.title;
                authorTd.textContent = b.author;
                isbnTd.textContent = b.isbn;

                editBtn.textContent = 'Edit';
                editBtn.setAttribute('id', b._id);
                editBtn.addEventListener('click', this["edit-book-get"]);

                deleteBtn.textContent = 'Delete';
                deleteBtn.setAttribute('id', b._id);
                deleteBtn.addEventListener('click', this["delete-book"]);

                actionsTd.appendChild(editBtn);
                actionsTd.appendChild(deleteBtn);

                tr.append(titleTd, authorTd, isbnTd, actionsTd);
                fragment.appendChild(tr);
                
            });
            booksContainer.innerHTML = '';
                booksContainer.appendChild(fragment);
        }
        catch(err){
            alert(err);
        }
    },
    'create-book': async function(){
        const title = html.getBookTtle();
        const author = html.getBookAuthor();
        const isbn = html.getBookIsbn();
        if(title !== null && author !== null && isbn !== null){
            const data = {
                title: title.value,
                author: author.value,
                isbn: isbn.value
            }
            try{
                await post('appdata', 'books', data);
                title.value = '';
                author.value = '';
                isbn.value = '';
                this["load-books"]();
            }
            catch(err){
                alert(err)
            }
        }
       
    },
    'edit-book-get': async function(){
        const id = this.id;
        try{
            const singleBook = await get('appdata',`books/${id}`);
            const editId = html.getEditId();
            const editTitle = html.getEditTitle();
            const editAuthor = html.getEditAuthor();
            const editIsbn = html.getEditIsbn();

            editTitle.value = singleBook.title;
            editAuthor.value = singleBook.author;
            editIsbn.value = singleBook.isbn;
            editId.value = singleBook._id;
        }
       catch(err){
           alert(err);
       }
    },
    'edit-book-post': async function(){
        const editId = html.getEditId();
        const editTitle = html.getEditTitle();
        const editAuthor = html.getEditAuthor();
        const editIsbn = html.getEditIsbn();
        if(editTitle !== null && editAuthor !== null && editIsbn !== null){
            const data = {
                title: editTitle.value,
                author: editAuthor.value,
                isbn: editIsbn.value
            }
            try{
                const modifiedBook = await put('appdata', `books/${editId.value}`, data);
                editId.value = '';
                editTitle.value = '';
                editAuthor.value = '';
                editIsbn.value = '';
                actions["load-books"]();
            }
            catch(err){
                alert(err);
            }
        }
        
    },
    'delete-book': async function(){
        if(confirm('Are you sure?')){
            const id = this.id;
            try{
                await del('appdata',`books/${id}`);
                actions["load-books"]();
            }
            catch(err){
                alert(err);
            }
        }
    }
}
function handleEvent(e){
    if(typeof actions[e.target.id] === 'function'){
        e.preventDefault();
        actions[e.target.id]();
    }
}
(function attachEvents(){
    document.addEventListener('click', handleEvent)
}())