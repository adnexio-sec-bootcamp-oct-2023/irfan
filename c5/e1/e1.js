//object book, construct title, author, year
class book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displaybook(){
        return this.title + this.author + this.year;
    }
}

let book1 = new book('The Great Gatsby ', 'F. Scott Fitzgerald ', '1925 ');
console.log(book1.displaybook());

