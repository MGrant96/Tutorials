// Sort array 
// Readonly array built into Typescript
var arr = ['foo', 'bar'];
var copy = arr.slice().sort();
console.log({ arr: arr });
console.log({ copy: copy });
// Sort method compares the string representation, 'aa' 22 against 'b' 3
var arrInt = [1, 3, 22];
arrInt.sort();
console.log(arrInt); // 1 , 22, 3
// need to pass in a comparer function in the sort method
var foo = [1, 3, 22];
foo.sort(function (a, b) { return a - b; });
// if a < b return -ve num
// if a === b return 0
// if a > b return +ve num
console.log(foo);
// Sort more complex objects
// Sort in year they are released
var movies = [
    {
        name: 'Shawshank redemption',
        year: 1994
    },
    {
        name: 'The Dark Knight',
        year: 2008
    },
    {
        name: 'The Godfather',
        year: 1972
    },
    {
        name: 'The Godfather 2',
        year: 1974
    }
];
// Sorted Ascending
movies.sort(function (a, b) { return a.year - b.year; }); // O(n logn)
console.log(movies.map(function (movie) { return movie.name; }));
// Descending
movies.sort(function (b, a) { return a.year - b.year; });
console.log(movies.map(function (movie) { return movie.name; }));
