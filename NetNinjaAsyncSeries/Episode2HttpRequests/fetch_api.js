// Async and await

const getTodos = async () => {
    
    const response = await fetch('todos.luigi.json');

    if (response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }

    const data = await response.json();

    return data;
};

getTodos()
    .then(data => console.log('Resolved:', data))
    .catch(err => console.log('Rejcted', err));


// fetch('/todos/luigi.json').then((response) => {
//     console.log('Resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });

// Fetch data
// Return response
// Tack on then to fire function with the data 
// error