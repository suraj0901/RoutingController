import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import path from 'path'

const PORT = 3000;

const app = createKoaServer({
    development: false,
    routePrefix: '/api',
    validation: {
        validationError: {
            target:false,
            value:false
        }
    },
    controllers: [path.join(__dirname + '/controllers/*/index.js')], // we specify controllers we want to use
});

console.info(`Starting server on http://localhost:${PORT}`);
app.listen(PORT);