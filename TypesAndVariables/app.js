// Declaring variables with 'var', 'let' and 'const'
// -  variable declared with var is global
// -  its possible to declared thesame funtion name twice using var
// -  let and const is limited or available to the block 
//    in which it is declared
// -  Not 'hoisted' to the top of the block
// -  'let' and 'const' may only be declared once within a block
//************************************************
// Basic Types
// - Boolean
// - Number
// - String
// - Array
// - Enum
// - Any 
// - void  **** not really a type
// Example.......................
// let myString = 'this is string';
// myString = 42; //error
// Adding Type Annotation
// Example.......................
// let myString: string = 'this is string';
// myString = 42; //error
// function ReturnNumber():number{
//      return 42;
// }
// let anotherString: string = 'this is also a string';
// anotherString = ReturnNumber(); //error
function getAllBooks() {
    var books = [
        { title: 'Attitude is everything', author: 'Jeff', available: true, category: Category.Fiction },
        { title: 'Maximizing your potentials', author: 'Myles', available: false, category: Category.Poetry },
        { title: 'learn C# in 21 days', author: 'Sam', available: true, category: Category.Poetry } //using enum   }
    ];
    return books;
}
function logFirstAvailable(books) {
    var numberOfBooks = books.length; // Adding type Annotation
    var firstAvailable = ''; // Adding type Annotation
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        firstAvailable = '';
        if (currentBook.available) {
            firstAvailable = currentBook.title;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Book Available: ' + firstAvailable);
}
// Demonstrating Enum, Array and turples 
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function getBookTitleByCategory(categoryFilter) {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentbook = allBooks_1[_i];
        if (currentbook.category === categoryFilter) {
            filteredTitles.push(currentbook.title);
        }
    }
    return filteredTitles;
}
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
//const allBooks = getAllBooks();
//logFirstAvailable(allBooks);
var poetryBooks = getBookTitleByCategory(Category.Poetry);
logBookTitles(poetryBooks);
//# sourceMappingURL=app.js.map