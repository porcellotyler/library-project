var myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    return
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    let list = document.getElementById("bookContainer");
        list.innerText = "";

    createTable(myLibrary);
    return 
}

//test book below
/*const nonfiction = new Book('memoir', 'ty pee', '253', 'read');
    addBookToLibrary(nonfiction);
*/

function createTable(library){
    for (let i = 0; i < library.length; i++) {
        let list = document.getElementById("bookContainer");

        let bookCard = document.createElement('div');
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

        let read = document.createElement('div');
            read.innerText = `Read yet: ${library[i].read}`;
            bookCard.append(read);

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

addBook.onclick = function() {
    let newBook = new Book((document.getElementById("title").value), (document.getElementById("author").value), (document.getElementById("pages").value), (document.getElementById("readYet").value)
    );

    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("readYet").value = '';

    return addBookToLibrary(newBook)
}