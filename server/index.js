require('dotenv').config();
const express = require('express')
//const connectDB = require('./config/db')
const app = express();
const PORT = process.env.PORT || 8086;

// Connect Database
//connectDB();

app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`API hit server -- `);
});

// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/transactions', require('./routes/transactions'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
