const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

// Connect to MongoDB string
mongoose.connect('mongodb+srv://ecommerce-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.get('/', (req, res) => {
  res.send('This is the E-commerce web API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
