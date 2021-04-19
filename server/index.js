const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/characters', require('./routes/characters'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})