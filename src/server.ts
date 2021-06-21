import express from 'express';

const app = express();

app.get('/test', (req, res) => res.send('Olá mundo'));

app.post('/test', (req, res) => res.send('Olá Mundo.'));

app.listen(3000, () => console.log('[SERVER IS RUNNING]'));
