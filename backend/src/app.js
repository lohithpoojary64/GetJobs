import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(cors());
app.use(json({ limit: '20kb' }));
app.use(bodyParser);
app.use(express.static('public'));

export { app };
