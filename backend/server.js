const userRoutes = require('./routes/userRoutes');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // Only start server if not in test mode
    if (process.env.NODE_ENV !== 'test') {
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }
  })
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send("API Running");
});

module.exports = app;