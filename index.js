const app = require('./server');
const { createServer } = require('http');

const server = createServer(app);
server.listen(8080, () => {
    console.log('Server is running on port 8080');
});