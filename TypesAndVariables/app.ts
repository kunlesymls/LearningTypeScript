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
    let books = [
        { title: 'Attitude is everything', author: 'Jeff', available: true, category: Category.Fiction }, //using enum  
        { title: 'Maximizing your potentials', author: 'Myles', available: false, category: Category.Poetry }, //using enum   },
        { title: 'learn C# in 21 days', author: 'Sam', available: true, category: Category.Poetry } //using enum   }
    ];
    return books;
}


function logFirstAvailable(books): void {
    let numberOfBooks: number = books.length; // Adding type Annotation
    let firstAvailable: string = ''; // Adding type Annotation
    for (let currentBook of books) {
        firstAvailable = '';
        if (currentBook.available) {
            firstAvailable = currentBook.title;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Book Available: ' + firstAvailable);

}

// Demonstrating Enum, Array and turples 

enum Category { Biography, Poetry, Fiction, History, Children }

function getBookTitleByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];

    for (let currentbook of allBooks) {
        if (currentbook.category === categoryFilter) {
            filteredTitles.push(currentbook.title);
        }
    }

    return filteredTitles;
}

function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

//const allBooks = getAllBooks();
//logFirstAvailable(allBooks);

const poetryBooks = getBookTitleByCategory(Category.Poetry);
logBookTitles(poetryBooks);