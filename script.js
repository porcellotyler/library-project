var myLibrary = [];

/* function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    return
}; */

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(book) {
    myLibrary.push(book);

    let list = document.getElementById("bookContainer");
        list.innerText = "";

    createTable(myLibrary);
    return 
}

function createTable(library){
    for (let i = 0; i < library.length; i++) {
        let list = document.getElementById("bookContainer");

        let bookCard = document.createElement('div');
            bookCard.classList.add('bookCard');
            bookCard.innerText = "Book Information:"
            list.prepend(bookCard);

        let title = document.createElement('div');
            title.innerText = `Title: ${library[i].title}`;
            bookCard.append(title);

        let author = document.createElement('div');
            author.innerText = `Author: ${library[i].author}`;
            bookCard.append(author);

        let pages = document.createElement('div');
            pages.innerText = `Pages: ${library[i].pages}`;
            bookCard.append(pages);

        /*let read = document.createElement('div');
            read.innerText = `Read yet: ${library[i].read}`;
            bookCard.append(read); */

        let checkBoxLabel = document.createElement('label');
            checkBoxLabel.htmlFor = "readYet";
            checkBoxLabel.appendChild(document.createTextNode("Have you read it yet?"));
            bookCard.append(checkBoxLabel);
        
            let checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            checkBox.name = "readYet";
            checkBox.value = "readYet";
            checkBox.id = "readYet";
            checkBox.setAttribute('id', 'checkBox');
            checkBox.onchange = () => {
                if (checkBox.checked === true) {
                        console.log("true")
                    library[i].read = "true";
                        console.log(library[i]);
                        console.table(myLibrary);
                        return
                } else {
                        console.log("false")
                    library[i].read = "false";
                        console.log(library[i]);
                        console.table(myLibrary);
                        return
                };
            };
            bookCard.append(checkBox);

        let deleteBtn = document.createElement('button');
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add(`book-${i}`)
            deleteBtn.onclick = () => {
                removeBookFromArray(`${i}`); 
                let location = deleteBtn.parentNode;
                location.innerHTML = "";
            };
            bookCard.append(deleteBtn);
    };
};

function removeBookFromArray(locationID) {
    console.log(locationID);
    
    //remove book from array
    let removefromLib = myLibrary.splice(locationID, 1)
            console.log(removefromLib);
            console.log(myLibrary);
};

const addBook = document.getElementById("newBookButton")

/* function checkForm() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');

    if (!titleInput.checkValidity()) {
        document.getElementById('messageContainer').innerHTML = titleInput.validationMessage;
    }
} */

addBook.onclick = function () {
    document.getElementById('messageContainer').innerHTML = '';
    
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');

    if (!titleInput.checkValidity()) {
        return document.getElementById('messageContainer').innerHTML = titleInput.validationMessage;
    } else if (!authorInput.checkValidity()) {
        return document.getElementById('messageContainer').innerHTML = authorInput.validationMessage;
    } else if (!pagesInput.checkValidity()) {
        return document.getElementById('messageContainer').innerHTML = pagesInput.validationMessage;
    }

    let newBook = new Book((document.getElementById("title").value), (document.getElementById("author").value), (document.getElementById("pages").value), /*(document.getElementById("readYet").value)*/ "false"
    );
    
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    /*document.getElementById("readYet").value = '';*/

    return addBookToLibrary(newBook)
};