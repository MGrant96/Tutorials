const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('<h1>Hi</h1>');
    }
});
const PORT = process.nextTick.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));