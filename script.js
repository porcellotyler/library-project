let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
       return title + ' by ' + author + ', ' + pages + ' pages, ' + read
    } 
    return
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);

    let tableBody = document.getElementById("tableBody");tableBody.innerHTML = "";

    createTable(myLibrary);
    return 
}

const nonfiction = new Book('memoir', 'ty pee', '253', 'read');
    addBookToLibrary(nonfiction);

function createTable(library){
    for (let i = 0; i < library.length; i++) {
        console.table(library);

        let table = document.getElementById("tableBody")

        let row = table.insertRow();
        let title = row.insertCell(0);
        title.innerText = library[i].title;
        
        let author = row.insertCell(1);
        author.innerText = library[i].author;

        let pages = row.insertCell(2);
        pages.innerText = library[i].pages;

        let read = row.insertCell(3);
        read.innerText = library[i].read;
    };
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