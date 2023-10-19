import express, { Response } from 'express';
import * as bodyParser from 'body-parser';
import TypesModule from './types/types.module';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// ROUTES
app.use('/types', TypesModule.controller);

app.get('/', (res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('conectado');
});