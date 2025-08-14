const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from anywhere (for now)
app.use(cors());

// Example route
app.get('/', (req, res) => {
    res.json({ message: "✅ Backend server is working!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
