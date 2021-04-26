const getTodos = (resource) => {

    return new Promise(() => {
        // make request object
        const request = new XMLHttpRequest();
        // fires every time there is a state change
        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Could not fetch data');
            }
        })

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/luigi.json').then(data => {
    console.log('Promise 1 resolved:', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('Promise 2 resolved:', err);
    // return any other todos we have todos/Michael.json eg
}).catch(err => {
    console.log('Promise Rejected:', err);
});
