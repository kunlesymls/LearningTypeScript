// Enums.......
// declaring enum in typescript 

// enum Category {Biograpghy, Poetry, Fiction}; // 0,1,2
// enum Category {Biograpghy = 1, Poetry, Fiction}; // 1,2,3
// enum Category {Biograpghy = 4, Poetry = 7, Fiction = 12}; // 5,8,12

// let favouriteCategory: Category = Category.Biography;

// console.log(favouriteCategory); // output will be 5
// let categoryString = Category[favouriteCategory]; //Biography

/// ..............ARRAYS....................
// Accessed and more used like Javascripts arrays
// Arrays can be declared in two different ways
// ......Example.......
// (1) let strArray: string[] = ['here', 'are', 'strings'];
// (2) let strArray2: Array<string> = ['more', 'strings', 'here'];
// Declare as an array of "any" to store any type in the same array
// ..Example..
// let anyArray: any[] = [42, true, 'banana'];


// ............TURPLES.............
// Array where types for the first few elements are specified
// Types do not have to be thesame
// ....Example....
// let myTurple:[number, string] = [25,'truck'];
// let firstElement = myTurple[0]; //output is 25
// let secondElement = myTurple[1]; //output is truck

// Additional elements can be any type from those previously specified
