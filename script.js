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
    return
}

const nonfiction = new Book('memoir', 'ty pee', '253', 'read');
    addBookToLibrary(nonfiction);

const fiction = new Book('a fake book', 'kurt vonnegut', '298', 'not read yet');
    addBookToLibrary(fiction);

const poetry = new Book('a poem collection', 'a poet', '87', 'not read yet');
    addBookToLibrary(poetry);

for (let i = 0; i < myLibrary.length; i++) {
    console.table(myLibrary);

    let table = document.getElementById("tableBody")

    let row = table.insertRow();
    let title = row.insertCell(0);
    title.innerText = myLibrary[i].title;
    
    let author = row.insertCell(1);
    author.innerText = myLibrary[i].author;

    let pages = row.insertCell(2);
    pages.innerText = myLibrary[i].pages;

    let read = row.insertCell(3);
    read.innerText = myLibrary[i].read;

};
