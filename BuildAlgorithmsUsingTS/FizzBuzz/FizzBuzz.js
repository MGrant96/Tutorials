// Print integers 1 to 100, multiples of 3 print Fizz, 5 print buzz, off both FizzBuzz
for (var index = 1; index < 101; index++) {
    if (index % 15 === 0) {
        console.log('FizzBuzz');
    }
    else if (index % 3 === 0) {
        console.log('Fizz');
    }
    else if (index % 5 === 0) {
        console.log('Buzz');
    }
    console.log(index);
}
// only do the multpile detection math once
console.log('No multiple detection duplication');
for (var index = 1; index < 101; index++) {
    var isFizz = index % 3 === 0;
    var isBuzz = index % 5 === 0;
    if (isFizz && isBuzz) {
        console.log('FizzBuzz');
    }
    else if (isFizz) {
        console.log('Fizz');
    }
    else if (isBuzz) {
        console.log('Buzz');
    }
    console.log(index);
}
// Remove the console log duplication
console.log('No Console Duplication');
for (var index = 1; index < 101; index++) {
    var isFizz = index % 3 === 0;
    var isBuzz = index % 5 === 0;
    var result = void 0;
    if (isFizz && isBuzz) {
        result = ('FizzBuzz');
    }
    else if (isFizz) {
        result = ('Fizz');
    }
    else if (isBuzz) {
        result = ('Buzz');
    }
    else {
        result = (index);
    }
    console.log(result);
}
// Tenary Operator
console.log('Tenary Operator Chain');
for (var index = 1; index < 101; index++) {
    var isFizz = index % 3 === 0;
    var isBuzz = index % 5 === 0;
    var result = isFizz && isBuzz
        ? 'FizzBuzz'
        : isFizz
            ? 'Fizz'
            : isBuzz
                ? isBuzz
                : index;
    console.log(result);
}
