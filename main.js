import express from 'express';
import fs from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/getApi', async (req, res) => {
    try {
        const data = await fs.readFile('apis.txt', 'utf8');

        const stringsArray = data
            .split('\n')
            .map(str => str.trim())
            .filter(str => str !== ''); // Filter out empty strings

        res.json({ keys: stringsArray });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while reading the file.' });
    }
});

app.listen(3000);
